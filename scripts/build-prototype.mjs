import { mkdir } from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";

const outdir = path.join(process.cwd(), "public", "prototype");
await mkdir(outdir, { recursive: true });

await build({
  bundle: true,
  entryPoints: [path.join(process.cwd(), "prototype", "bluefairy-world.js")],
  format: "iife",
  logLevel: "info",
  minify: true,
  outfile: path.join(outdir, "bluefairy-world.js"),
  platform: "browser",
  target: ["es2020"],
});
