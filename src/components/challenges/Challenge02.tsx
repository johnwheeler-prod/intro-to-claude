import ChallengeCard from "@/components/ChallengeCard";

// CHALLENGE 02 — Hands-Free Mode
//
// Your task: re-run Claude with the --dangerously-skip-permissions flag so it can
// make file edits without asking for your approval each time.
//
// Ask Claude to:
//   1. Add the text "⚡ Auto-accepted" as a new line inside the description below
//   2. Set `completed` to {true}
//
// Notice the difference: with --dangerously-skip-permissions, Claude edits files
// immediately without pausing to ask permission. Use this flag only in environments
// you trust — it gives Claude free rein over your filesystem.
//
// Command to try: claude --dangerously-skip-permissions

export default function Challenge02() {
  return (
    <ChallengeCard
      number={2}
      title="Hands-Free Mode"
      difficulty={2}
      tag="Permissions"
      completed={false}
      description={
        <div className="flex flex-col gap-2">
          <p>
            By default, Claude asks for your approval before writing to files.
            Run Claude with{" "}
            <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 text-xs font-mono">
              --dangerously-skip-permissions
            </code>{" "}
            to auto-accept all edits and experience a fully autonomous session.
          </p>
          <p className="text-slate-500 text-xs">
            Use with care: this flag bypasses all file-write confirmations.
          </p>
        </div>
      }
      hint="Run: claude --dangerously-skip-permissions — then ask it to mark this card complete."
    />
  );
}
