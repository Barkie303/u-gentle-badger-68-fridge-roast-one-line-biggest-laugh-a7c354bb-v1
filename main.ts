// Fridge Roast: one line, biggest laugh.
// A smart fridge roast aimed at its app and its smug opinions about the milk.
import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "My fridge's app notified me the milk is 'approaching expiry' — thanks, genius, I've been smelling that since Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
