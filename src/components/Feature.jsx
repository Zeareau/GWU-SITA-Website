// src/components/Feature.jsx
export default function Feature({ icon, title, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 text-white bg-white/5 shadow-[0_0_24px_rgba(255,115,179,0.18)]">
      <div className="h-10 w-10 rounded-xl bg-linear-to-r from-[#4268F6] via-[#A43BF1] to-[#FF6F3C] grid place-items-center shadow-[0_0_18px_rgba(164,59,241,0.45)]">   
        {icon}
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-white/70">{sub}</div>
    </div>
  )};
