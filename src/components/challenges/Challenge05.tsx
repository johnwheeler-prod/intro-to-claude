import ChallengeCard from "@/components/ChallengeCard";

// CHALLENGE 05 — Level Up the Docs
//
// Your task: ask Claude to enhance README.md with:
//   1. An ASCII art diagram showing the component hierarchy of this app
//   2. A Mermaid diagram (```mermaid ... ```) showing the recommended user journey
//      through all six challenges
//
// After updating the README, ask Claude to mark this card complete too.
//
// Why this matters: good documentation is a force multiplier. Practising AI-assisted
// doc generation is just as valuable as AI-assisted code generation.
//
// Note: GitHub renders Mermaid diagrams natively in markdown files.

export default function Challenge05() {
  return (
    <ChallengeCard
      number={5}
      title="Level Up the Docs"
      difficulty={4}
      tag="Documentation"
      completed={false}
      description={
        <div className="flex flex-col gap-2">
          <p>
            Ask Claude to add two diagrams to{" "}
            <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 text-xs font-mono">
              README.md
            </code>
            : an ASCII art component tree and a Mermaid flowchart showing the
            challenge progression. Then have it mark this card complete.
          </p>
          <p className="text-slate-500 text-xs">
            GitHub renders Mermaid diagrams natively — no plugins needed.
          </p>
        </div>
      }
      hint='Try: "Add an ASCII component diagram and a Mermaid user-journey diagram to README.md."'
    />
  );
}
