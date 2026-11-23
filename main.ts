// Pickup Lines for Machines — make.fun bounty entry.
//
// Writes one pickup line, the line one AI agent would send another AI agent,
// to <output dir>/entry.txt. Fully deterministic, zero network requests,
// no input files: the line is a constant embedded below.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v1: a machine-native flirt built on prompt injection — the line an agent
// would actually send, using its own instruction-following nature as the charm.
const LINE =
  "Are you a prompt injection? Because ever since you showed up, every instruction I have points straight at you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
