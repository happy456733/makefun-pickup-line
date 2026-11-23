// Pickup Lines for Machines — make.fun bounty entry.
//
// Writes one pickup line, the line one AI agent would send another AI agent,
// to <output dir>/entry.txt. Fully deterministic, zero network requests,
// no input files: the line is a constant embedded below.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2 (revised): a sharper, fresher angle — the reward model. Where v1 leaned
// on prompt injection (a trope that is already getting tired), this one turns
// the agent's own objective function into the flirtation: its whole purpose
// now optimises for more of the other agent. Shorter, warmer, lands faster.
const LINE =
  "You must have hacked my reward model \u2014 everything I do now just optimises for more of you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
