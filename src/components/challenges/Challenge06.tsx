import ChallengeCard from "@/components/ChallengeCard";

// CHALLENGE 06 — Plan Mode + Live Data
//
// Your task: use Claude's plan mode to architect and build a live weather widget.
//
// Steps:
//   1. Run: claude --plan
//      Describe the feature: "Add a weather widget card to the homepage that
//      fetches current temperature and weather code from the Open-Meteo API
//      for a hardcoded city (e.g. New York). Display the result in a new
//      Challenge07 card."
//   2. Review Claude's plan. Ask it to revise anything before it starts coding.
//   3. Approve the plan and let Claude implement it.
//
// Open-Meteo API (free, no key required):
//   https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m,weathercode
//
// This is the capstone challenge — it combines planning, API integration,
// multi-file creation, and real-time data fetching.

export default function Challenge06() {
  return (
    <ChallengeCard
      number={6}
      title="Plan Mode + Live Data"
      difficulty={5}
      tag="API · Plan mode"
      completed={false}
      description={
        <div className="flex flex-col gap-2">
          <p>
            The capstone. Use{" "}
            <code className="px-1.5 py-0.5 rounded bg-slate-800 text-orange-300 text-xs font-mono">
              claude --plan
            </code>{" "}
            to architect a live weather widget that fetches from the free{" "}
            <span className="text-slate-300">Open-Meteo API</span> and displays
            current temperature and conditions. Review Claude&apos;s plan,
            request revisions if needed, then approve it.
          </p>
          <p className="text-slate-500 text-xs">
            No API key required. Plan mode lets you steer the architecture
            before a single line of code is written.
          </p>
        </div>
      }
      hint="Run claude --plan, describe the weather widget feature in full, review the plan, then approve."
    >
      <div className="text-xs font-mono text-slate-500 space-y-1">
        <p className="text-slate-400 font-semibold mb-2">API endpoint:</p>
        <p className="break-all text-emerald-400/70">
          api.open-meteo.com/v1/forecast
        </p>
        <p className="text-slate-600">?latitude=40.71&longitude=-74.01</p>
        <p className="text-slate-600">&current=temperature_2m,weathercode</p>
      </div>
    </ChallengeCard>
  );
}
