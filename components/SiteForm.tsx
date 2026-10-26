"use client";

import { FormEvent, ReactNode, Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/config";

function prettyLabel(name: string) {
  return name.replace(/[_-]+/g, " ").replace(/^./, (c) => c.toUpperCase());
}

function keyOf(ctrl: HTMLSelectElement | HTMLInputElement | RadioNodeList | undefined) {
  if (!ctrl || !("options" in ctrl)) return ctrl && "value" in ctrl ? ctrl.value : "";
  const o = ctrl.options[ctrl.selectedIndex];
  return o ? o.getAttribute("data-key") || o.value : "";
}

function selectByKey(ctrl: Element | RadioNodeList | undefined, key: string) {
  if (!ctrl || !("tagName" in ctrl) || ctrl.tagName !== "SELECT") return;
  Array.from((ctrl as HTMLSelectElement).options).forEach((opt) => {
    if ((opt.getAttribute("data-key") || opt.value) === key) {
      (ctrl as HTMLSelectElement).value = opt.value;
    }
  });
}

function SiteFormInner({
  subject,
  children,
}: {
  subject: string;
  children: ReactNode;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const params = useSearchParams();

  function updateConditional(form: HTMLFormElement) {
    form.querySelectorAll<HTMLElement>("[data-show-when]").forEach((el) => {
      const parts = (el.getAttribute("data-show-when") || "").split("=");
      const ctrl = form.elements.namedItem(parts[0]);
      const show = keyOf(ctrl as HTMLSelectElement) === parts[1];
      el.hidden = !show;
      el.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        "input,select,textarea"
      ).forEach((f) => {
        f.disabled = !show;
      });
    });
  }

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    params.forEach((value, key) => selectByKey(form.elements.namedItem(key) || undefined, value));
    updateConditional(form);
  }, [params]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest("a[data-how]");
      if (!a || !formRef.current) return;
      selectByKey(formRef.current.elements.namedItem("how") || undefined, a.getAttribute("data-how") || "");
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function onChange() {
    if (formRef.current) updateConditional(formRef.current);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);
    if (fd.get("_gotcha")) return;
    fd.delete("_gotcha");

    const data: Record<string, string> = {};
    Array.from(new Set(Array.from(fd.keys()))).forEach((k) => {
      const vals = fd
        .getAll(k)
        .map((v) => String(v).trim())
        .filter(Boolean);
      if (vals.length) data[k] = vals.join(", ");
    });
    data._subject = subject;
    if (data.email) data._replyto = data.email;

    const status = form.querySelector<HTMLElement>(".form-status");
    const btn = form.querySelector<HTMLButtonElement>("button[type=submit]");
    const setStatus = (msg: string, cls = "") => {
      if (status) {
        status.textContent = msg;
        status.className = `form-status ${cls}`.trim();
      }
    };

    if (!siteConfig.formEndpoint) {
      const body = Object.keys(data)
        .filter((k) => k.charAt(0) !== "_")
        .map((k) => `${prettyLabel(k)}: ${data[k]}`)
        .join("\n");
      window.location.href = `mailto:${siteConfig.fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("Opening your email app so you can send your details to MBB…", "ok");
      return;
    }

    if (btn) btn.disabled = true;
    setStatus("Sending…");
    try {
      const r = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error("bad status");
      form.reset();
      updateConditional(form);
      setStatus("Thank you! Your submission has been received. The MBB team will get back to you soon.", "ok");
    } catch {
      setStatus("Sorry, we couldn't send that. Please try again, or WhatsApp us on +254 746 275 156.", "err");
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  return (
    <form
      ref={formRef}
      className="form reveal"
      data-subject={subject}
      onSubmit={onSubmit}
      onChange={onChange}
    >
      {children}
    </form>
  );
}

export default function SiteForm({ subject, children }: { subject: string; children: ReactNode }) {
  return (
    <Suspense fallback={<form className="form reveal">{children}</form>}>
      <SiteFormInner subject={subject}>{children}</SiteFormInner>
    </Suspense>
  );
}
