import Challenge01 from "@/components/challenges/Challenge01";
import Challenge02 from "@/components/challenges/Challenge02";
import Challenge03 from "@/components/challenges/Challenge03";
import Challenge04 from "@/components/challenges/Challenge04";
import Challenge05 from "@/components/challenges/Challenge05";
import Challenge06 from "@/components/challenges/Challenge06";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Hands-on learning
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Intro to Claude Code
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Complete each challenge using the Claude CLI. Start simple and work
          your way up — each card is a real file you&apos;ll edit with Claude.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Challenge01 />
        <Challenge02 />
        <Challenge03 />
        <Challenge04 />
        <Challenge05 />
        <Challenge06 />
      </div>

      <footer className="mt-16 text-center text-slate-600 text-sm">
        <p>
          Built to be broken —{" "}
          <span className="text-slate-500">edit these files with Claude</span>
        </p>
      </footer>
    </main>
  );
}
