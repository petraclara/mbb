// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Animated counters
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const duration = 1600;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

// Contact form: opens the visitor's email app addressed to MBB.
// (Swap for Formspree / a backend later if you want messages delivered without an email client.)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const MBB_EMAIL = "mentorshipbeyondboundaries644@gmail.com";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`MBB enquiry: ${data.get("topic")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:${MBB_EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = "Opening your email app…";
});
