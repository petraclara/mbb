// Static site builder for Mentorship Beyond Boundaries.
// Usage:  node build.mjs
// Reads  src/layout.html + src/partials/*.html + src/pages/*.html
// Writes  <page>.html in the project root, plus sitemap.xml.
// No dependencies required.

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// ⚠️ Change this to the final live domain before launch, then run `node build.mjs` again.
const SITE_URL = "https://mentorshipbeyondboundaries.com";

const root = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(join(root, p), "utf8");

const layout = read("src/layout.html");
const header = read("src/partials/header.html");
const footer = read("src/partials/footer.html");

const files = readdirSync(join(root, "src/pages")).filter((f) => f.endsWith(".html"));
const today = new Date().toISOString().slice(0, 10);
const sitemap = [];

for (const file of files) {
  const raw = read(`src/pages/${file}`);
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error(`${file}: missing front matter (--- title/description ---)`);

  const meta = Object.fromEntries(
    m[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const i = line.indexOf(":");
        return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
      })
  );
  if (!meta.title || !meta.description) throw new Error(`${file}: title and description are required`);

  const url = `${SITE_URL}/${file === "index.html" ? "" : file}`;
  const nav = header.replaceAll(`href="${file}"`, `href="${file}" aria-current="page"`);

  const html = layout
    .replaceAll("{{header}}", () => nav)
    .replaceAll("{{footer}}", () => footer)
    .replaceAll("{{content}}", () => m[2].trim())
    .replaceAll("{{title}}", () => meta.title)
    .replaceAll("{{description}}", () => meta.description)
    .replaceAll("{{url}}", () => url)
    .replaceAll("{{site}}", () => SITE_URL);

  writeFileSync(join(root, file), html);
  sitemap.push({ url, priority: file === "index.html" ? "1.0" : "0.8" });
  console.log("built", file);
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sitemap
    .map((s) => `  <url><loc>${s.url}</loc><lastmod>${today}</lastmod><priority>${s.priority}</priority></url>`)
    .join("\n") +
  `\n</urlset>\n`;
writeFileSync(join(root, "sitemap.xml"), xml);

writeFileSync(join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log("built sitemap.xml, robots.txt");
