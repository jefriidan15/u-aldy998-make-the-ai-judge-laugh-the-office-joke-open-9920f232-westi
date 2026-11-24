// Make the AI Judge Laugh: The Office Joke (Open) — @westi7460 entry
// Writes a single one-line joke about office life to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Entry: the status meeting that escaped into email form, then
// circled back and booked a meeting about itself.
const JOKE =
  "Our team finally replaced the weekly status meeting with an email, and the email has already scheduled a meeting to discuss the email.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
