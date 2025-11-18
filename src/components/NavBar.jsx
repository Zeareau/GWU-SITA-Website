// src/components/NavBar.jsx
export default function NavBar({ onJump, signup = "#" }) {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(6,8,14,0.6)] backdrop-blur supports-backdrop-filter:bg-[rgba(6,8,14,0.4)] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] grid place-items-center text-white shadow-[0_0_28px_0_rgba(252,70,107,0.55)]">
            <span className="text-xs font-bold">SI</span>
          </div>
          <div className="leading-tight">
            <p className="text-[11px] text-white/60">George Washington University</p>
            <h1 className="text-sm font-semibold text-white">SITA • Student Information Technology Association</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {[
            ["about", "About"],
            ["events", "Events"],
            ["workshops", "Workshops"],
            ["team", "Team"],
            ["join", "Join"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => onJump(id)}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {label}
            </button>
          ))}
          <a
            href={signup}
            className="ml-2 rounded-2xl px-4 py-2 text-sm font-medium text-white bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] hover:brightness-110 transition shadow-[0_0_20px_rgba(255,115,179,0.45)]"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
