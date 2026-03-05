import ChallengeCard from "@/components/ChallengeCard";

// CHALLENGE 01 — Your First Claude Command
//
// Your task: use the Claude CLI to make two edits to this file:
//   1. Wrap the <p> description text below in a <del> tag to give it a strikethrough
//   2. Change the `completed` prop on <ChallengeCard> from {false} to {true}
//
// When `completed` is true, the card will display a green ✓ badge in the upper right corner.
//
// Run `claude` in your terminal from the project root to get started.

export default function Challenge01() {
  return (
    <ChallengeCard
      number={1}
      title="Your First Claude Command"
      difficulty={1}
      tag="CLI basics"
      completed={false}
      description={
        <p>
          Open your terminal, navigate to this project, and run{" "}
          <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 text-xs font-mono">
            claude
          </code>{" "}
          to start a session. Ask Claude to mark this challenge as complete by
          adding a strikethrough to this description text and turning on the
          green checkmark badge.
        </p>
      }
      hint='Try: "Add a strikethrough to the description text in Challenge01.tsx and set the completed prop to true."'
    />
  );
}
