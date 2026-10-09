// Quick QA: verifies internal links, images, anchors and basic SEO tags in built pages.
// Usage: node check.mjs
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const pages = readdirSync(root).filter((f) => f.endsWith(".html"));
const ids = {};
const html = {};
for (const p of pages) {
  html[p] = readFileSync(join(root, p), "utf8");
  ids[p] = new Set([...html[p].matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
}

let problems = 0;
const bad = (p, msg) => { problems++; console.log(`✗ ${p}: ${msg}`); };

for (const p of pages) {
  const h = html[p];
  for (const m of h.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|tel:|data:)/.test(url)) continue;
    const [pathPart, hash] = url.split("#");
    const [file] = pathPart.split("?");
    if (file && !existsSync(join(root, file))) bad(p, `missing file ${url}`);
    if (hash) {
      const target = file || p;
      if (ids[target] && !ids[target].has(hash)) bad(p, `missing anchor #${hash} in ${target}`);
    }
  }
  for (const m of h.matchAll(/<img\b[^>]*>/g)) if (!/\balt="[^"]+"/.test(m[0])) bad(p, `img without alt: ${m[0].slice(0, 60)}`);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) bad(p, "should have exactly one <h1>");
  if (!/<title>[^<]{10,}/.test(h)) bad(p, "missing/short title");
  const d = h.match(/name="description" content="([^"]*)"/);
  if (!d || d[1].length < 50 || d[1].length > 175) bad(p, `description length ${d ? d[1].length : 0}`);
  if (/\{\{/.test(h)) bad(p, "unreplaced template token");
}
console.log(problems ? `\n${problems} problem(s)` : `✓ ${pages.length} pages OK (links, anchors, alt text, h1, titles, descriptions)`);
