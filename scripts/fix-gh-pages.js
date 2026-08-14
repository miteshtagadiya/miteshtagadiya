/**
 * GitHub Pages + Jekyll ignore paths starting with `_`, and `.nojekyll`
 * is not reliably disabling that for this site. Next.js emits `/_next/*`.
 * Rename folder + rewrite refs so static assets resolve on Pages.
 */
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const fromDir = path.join(outDir, "_next");
const toDir = path.join(outDir, "next");

if (!fs.existsSync(outDir)) {
  console.error("out/ missing — run next build first");
  process.exit(1);
}

if (fs.existsSync(fromDir)) {
  if (fs.existsSync(toDir)) {
    fs.rmSync(toDir, { recursive: true, force: true });
  }
  fs.renameSync(fromDir, toDir);
  console.log("renamed out/_next → out/next");
} else if (!fs.existsSync(toDir)) {
  console.error("neither out/_next nor out/next found");
  process.exit(1);
}

const textExt = new Set([
  ".html",
  ".js",
  ".css",
  ".json",
  ".txt",
  ".xml",
  ".map",
  ".webmanifest"
]);

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full);
      continue;
    }
    if (!textExt.has(path.extname(ent.name))) continue;
    const src = fs.readFileSync(full, "utf8");
    if (!src.includes("/_next/")) continue;
    fs.writeFileSync(full, src.replaceAll("/_next/", "/next/"));
  }
}

walk(outDir);
fs.writeFileSync(path.join(outDir, ".nojekyll"), "\n");
console.log("rewrote /_next/ → /next/ and ensured .nojekyll");
