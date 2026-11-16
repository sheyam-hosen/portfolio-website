import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060609] text-zinc-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-[#0c0c16]/80 border border-purple-500/20 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Page Not Found</span>
        </div>

        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500 mb-4 tracking-tight">
          404
        </h1>

        <h2 className="text-xl font-bold text-white mb-2">
          Destination Out of Orbit
        </h2>

        <p className="text-xs sm:text-sm text-zinc-400 mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been relocated. Explore Mohammad Sheyam Hosen&apos;s portfolio from the home page.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}

