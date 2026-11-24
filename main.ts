import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "The bug is never in the code you tested. It is in the code you trusted.";

if (fortune.length < 1 || fortune.length > 120 || !fortune.trim()) {
  throw new Error("fortune must be 1-120 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
console.log(fortune);
