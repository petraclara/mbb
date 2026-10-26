// Writes /about.html → /about/ redirects so old links keep working after the Next.js move.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const pages = [
  "about",
  "programs",
  "academy",
  "impact",
  "stories",
  "mentors-connect",
  "partner",
  "book",
  "join",
  "apply",
  "contact",
];

const out = join(process.cwd(), "out");

function redirectHtml(to) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=${to}" />
  <link rel="canonical" href="https://mentorshipbeyondboundaries.com${to}" />
  <title>Redirecting…</title>
  <script>location.replace(${JSON.stringify(to)} + location.search + location.hash);</script>
</head>
<body>
  <p>This page has moved. <a href="${to}">Continue</a>.</p>
</body>
</html>
`;
}

writeFileSync(join(out, ".nojekyll"), "");
for (const page of pages) {
  writeFileSync(join(out, `${page}.html`), redirectHtml(`/${page}/`));
}
console.log("wrote .html redirects and .nojekyll");
