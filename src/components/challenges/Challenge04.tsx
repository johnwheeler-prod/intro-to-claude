import ChallengeCard from "@/components/ChallengeCard";

// CHALLENGE 04 — Multi-File Coordination
//
// Your task: ask Claude to add persistent "completed" state to all six challenge cards.
//
// Specifically, ask Claude to:
//   1. Add a localStorage-backed hook (e.g. src/hooks/useCompleted.ts) that stores
//      which challenges have been marked done
//   2. Wire the hook into each Challenge0X.tsx component so the green checkmark
//      badge persists across page refreshes
//   3. Add a small "Mark complete" button to each card that toggles the state
//
// This challenge requires coordinated edits across 7+ files simultaneously —
// a great test of Claude's ability to understand and modify a whole codebase.
//
// Tip: describe the full feature in one prompt rather than step-by-step.

export default function Challenge04() {
  return (
    <ChallengeCard
      number={4}
      title="Multi-File Coordination"
      difficulty={3}
      tag="State management"
      completed={false}
      description={
        <div className="flex flex-col gap-2">
          <p>
            Ask Claude to add a persistent{" "}
            <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 text-xs font-mono">
              localStorage
            </code>
            -backed &quot;completed&quot; state to all six cards, with a
            &quot;Mark complete&quot; button on each. Completions should survive
            a page refresh.
          </p>
          <p className="text-slate-500 text-xs">
            This will touch 7+ files at once — watch how Claude plans and
            coordinates the changes.
          </p>
        </div>
      }
      hint="Give Claude the full picture in one prompt: describe the hook, the button, and the persistence requirement together."
    />
  );
}
