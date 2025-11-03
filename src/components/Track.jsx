// src/components/Track.jsx
export default function Track({ title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/0.03 p-6">
      <h3 className="font-bold text-white mb-3">{title}</h3>
      <ul className="space-y-2 text-white/75">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-linear-to-r from-fuchsia-400 via-pink-400 to-amber-300" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
