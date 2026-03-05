import ChallengeCard from "@/components/ChallengeCard";

// CHALLENGE 03 — Teach Claude Your Project
//
// Your task: personalise BRIEF.md with a real coding preference, then start a fresh
// Claude session and reference BRIEF.md at the start so Claude has that context.
//
// Steps:
//   1. Open BRIEF.md in the repo root and add at least one custom coding rule
//      (e.g. "always use named exports", "prefer Tailwind over inline styles", etc.)
//   2. Start a new Claude session and at the prompt paste:
//      "Please read BRIEF.md first, then help me with this project."
//   3. Ask Claude to apply one of your rules somewhere meaningful in the codebase.
//   4. Finally, ask Claude to set `completed` to {true} on this card.
//
// Claude reads CLAUDE.md automatically — BRIEF.md is the project's custom equivalent.

export default function Challenge03() {
  return (
    <ChallengeCard
      number={3}
      title="Teach Claude Your Project"
      difficulty={3}
      tag="Context & memory"
      completed={false}
      description={
        <div className="flex flex-col gap-2">
          <p>
            Claude doesn&apos;t automatically know your preferences — you have
            to tell it. Edit{" "}
            <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 text-xs font-mono">
              BRIEF.md
            </code>{" "}
            with your own coding rules, then start a fresh session and ask
            Claude to read it before doing any work. Watch how it respects your
            instructions throughout the session.
          </p>
          <p className="text-slate-500 text-xs">
            Tip: keeping BRIEF.md in the context window is the difference
            between a generic assistant and one that knows your project.
          </p>
        </div>
      }
      hint='Start your session with: "Please read BRIEF.md first, then help me with this project."'
    />
  );
}
