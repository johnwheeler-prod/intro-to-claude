import React from "react";

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export interface ChallengeCardProps {
  number: number;
  title: string;
  difficulty: Difficulty;
  tag: string;
  description: React.ReactNode;
  hint: string;
  completed?: boolean;
  children?: React.ReactNode;
}

const difficultyLabel: Record<Difficulty, string> = {
  1: "Beginner",
  2: "Beginner",
  3: "Intermediate",
  4: "Intermediate",
  5: "Advanced",
};

const difficultyColor: Record<Difficulty, string> = {
  1: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  2: "text-sky-400 border-sky-400/30 bg-sky-400/10",
  3: "text-violet-400 border-violet-400/30 bg-violet-400/10",
  4: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  5: "text-red-400 border-red-400/30 bg-red-400/10",
};

function Stars({ count }: { count: Difficulty }) {
  return (
    <span className="text-amber-400 text-sm tracking-tighter" aria-label={`Difficulty: ${count} out of 5`}>
      {"★".repeat(count)}
      <span className="text-slate-700">{"★".repeat(5 - count)}</span>
    </span>
  );
}

export default function ChallengeCard({
  number,
  title,
  difficulty,
  tag,
  description,
  hint,
  completed = false,
  children,
}: ChallengeCardProps) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 gap-4 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/80">
      {/* Completed badge — added by Challenge 01 task */}
      {completed && (
        <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-emerald-500/20">
          ✓
        </div>
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 text-sm font-mono font-semibold">
            {String(number).padStart(2, "0")}
          </span>
          <h2 className="text-white font-semibold text-base leading-tight">
            {title}
          </h2>
        </div>
      </div>

      {/* Tags row */}
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium ${difficultyColor[difficulty]}`}
        >
          {difficultyLabel[difficulty]}
        </span>
        <span className="inline-flex items-center px-2 py-0.5 rounded-md border border-slate-700 bg-slate-800 text-slate-400 text-xs font-medium">
          {tag}
        </span>
        <Stars count={difficulty} />
      </div>

      {/* Description */}
      <div className="text-slate-300 text-sm leading-relaxed flex-1">
        {description}
      </div>

      {/* Extra content slot (used by advanced challenges) */}
      {children && (
        <div className="rounded-xl bg-slate-800/60 border border-slate-700/50 p-4">
          {children}
        </div>
      )}

      {/* Hint */}
      <div className="mt-auto pt-2 border-t border-slate-800">
        <p className="text-xs text-slate-500">
          <span className="font-semibold text-slate-400">Hint: </span>
          {hint}
        </p>
      </div>
    </div>
  );
}
