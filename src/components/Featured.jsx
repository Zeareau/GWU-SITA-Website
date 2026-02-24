import React from "react";
// import featuredImg from "/src/assets/featured_hackathon.jpg";
import featuredImg from "/src/assets/aws-gbm.png";

// EDIT THIS OBJECT to change featured item anytime
const FEATURED = {
  title: "Most Recent Event",
  blurb:
    "GW SITA hosted an industry insights event with AWS cloud security consultant Bryce Rohloff. Attendees gained valuable insights into the cloud industry and had the opportunity to network with a seasoned professional in the field.",
  img: featuredImg,
  alt: "Our industry insights event with AWS cloud security consultant Bryce Rohloff in February 2025",
  date: "Feb 5, 2026",
  ctaLabel: "View Photos",
  ctaLink: "https://www.instagram.com/gwusita/",
  tags: ["AWS", "Outreach", "Networking"],
};

export default function Featured() {
  const f = FEATURED;

  return (
    <section id="featured" className="py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10">Featured</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Image */}
<div className="relative group rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm 
shadow-[0_0_40px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_65px_-5px_rgba(132,85,255,0.6)] hover:border-purple-400/60 hover:scale-[1.015]">
  <img 
    src={f.img} 
    alt={f.alt} 
    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:saturate-125"
  />
  {/* subtle gradient overlay at bottom */}
  <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-black/20"></div>
</div>

{/* Text */}
<div className="group relative rounded-3xl p-0.5 overflow-hidden
                bg-linear-to-r from-[#8A3FFC] via-[#A855F7] to-[#3B82F6]">
  {/* Inner Card */}
  <div className="rounded-3xl bg-[#0f111a]/95 backdrop-blur-md p-6 shadow-lg 
                  border border-white/5 transition-all duration-300">
    <div>
      <div className="text-sm text-white/60">{f.date}</div>
      <h3 className="text-xl font-bold mt-2">{f.title}</h3>
      <p className="mt-3 text-white/80">{f.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {f.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6">
      <a
        href={f.ctaLink}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-sm border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition"
      >
        {f.ctaLabel} ↗
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
