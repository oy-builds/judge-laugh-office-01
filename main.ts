import * as fs from "node:fs";

// The office printer, treated like the coworker it clearly is:
// moody, uncooperative, and somehow still employed.
const review = "Our printer's performance review read 'works independently, ";
const verdict = "refuses feedback, jams under pressure' — it still scored higher than me.";
const line = review + verdict;

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", `${line}\n`, "utf-8");
