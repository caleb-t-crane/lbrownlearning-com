'use client';

import { useState } from "react";

interface Program {
  key: string;
  title: string;
  triggerClass: string;
  category: string;
  audience: string;
  delivery: string;
  duration: string;
  prereqs: string;
  overview: string;
}

const programs: Program[] = [
  {
    key: "introduction-to-beer",
    title: "Introduction to Beer",
    triggerClass: "intro-to-beer",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, TEAM-BUILDING FOCUSED MGRS.",
    delivery: "INSTRUCTOR-LED",
    duration: "3-4 HOURS",
    prereqs: "NONE",
    overview:
      "Increase knowledge and confidence when working with one of the world's most popular and oldest beverages. A great program for people just starting in the beer industry or consumers who have been enjoying beer for years and want to take their education to the next level.",
  },
  {
    key: "understanding-beer",
    title: "Understanding Beer",
    triggerClass: "understanding-beer",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, BEER-CENTRIC RETAILERS",
    delivery: "INSTRUCTOR-LED",
    duration: "19-20 HOURS (TOTAL)",
    prereqs: "INTRO TO BEER PREFERRED",
    overview:
      "Enjoy the perfect beer for each occasion or prepare for beer certifications by participating in this high-level beer education program. Geek out on beer ingredients, malting & brewing processes, examining taste, history of ales & lagers, and the basics of draft beer.",
  },
  {
    key: "beer-ingredients",
    title: "Beer Ingredients",
    triggerClass: "beer-ingredients",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, BEER-CENTRIC RETAILERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-HOURS",
    prereqs: "INTRO TO BEER – INCLUDED IN THE UNDERSTANDING BEER PROGRAM",
    overview:
      "It's difficult to work with beer without a thorough understanding of the materials that make it. During this hands-on session, we'll show and explain the importance of each key beer ingredient then give you opportunities to taste, smell, and sample them too. True beer education starts here.",
  },
  {
    key: "malting-brewing-processes",
    title: "Malting & Brewing Processes",
    triggerClass: "malting-brewing",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, BEER CENTRIC RETAILERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-4-HOURS (TOUR DEPENDENT)",
    prereqs: "INTRO TO BEER – INCLUDED IN THE UNDERSTANDING BEER PROGRAM",
    overview:
      "After gaining an understanding of the ingredients, the next step is to learn the processes that produce the product in its final package (bottle, can, or keg). This module works best when it's paired with a local brewery tour.",
  },
  {
    key: "examining-taste",
    title: "Examining Taste",
    triggerClass: "examining-taste",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, BEER CENTRIC RETAILERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2 HOURS",
    prereqs: "INTRO TO BEER – INCLUDED IN THE UNDERSTANDING BEER PROGRAM",
    overview:
      "How we experience taste is a more complex sensation than people realize. It's especially important when working with beer. During this module, learn and apply taste methodology and get an intimate understanding of how we process this important human sense.",
  },
  {
    key: "beer-history-ales",
    title: "Beer History - Ales",
    triggerClass: "beer-history-ales",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, BEER CENTRIC RETAILERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-3 HOURS",
    prereqs: "INTRO TO BEER – INCLUDED IN THE UNDERSTANDING BEER PROGRAM",
    overview:
      "Many of the beer styles we drink today originate from early creations hundreds of years ago. Given the environment from each location, beer makers made the best versions they could. In this module learn and sample the historic backbone of ales. Get ready for some wild stories!",
  },
  {
    key: "beer-history-lagers",
    title: "Beer History - Lagers",
    triggerClass: "beer-history-lagers",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, BEER CENTRIC RETAILERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-3 HOURS",
    prereqs: "INTRO TO BEER – INCLUDED IN THE UNDERSTANDING BEER PROGRAM",
    overview:
      "Many of the beer styles we drink today originate from early creations hundreds of years ago. Given the environment from each location, beer makers made the best versions they could. In this module learn and sample the historic backbone of lagers. Get ready for some wild stories!",
  },
  {
    key: "draft-beer-basics",
    title: "Draft Beer Basics",
    triggerClass: "draft-beer-basics",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, BEER CENTRIC RETAILERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-3 HOURS (EQUIPMENT DEPENDENT)",
    prereqs: "INTRO TO BEER – INCLUDED IN THE UNDERSTANDING BEER PROGRAM",
    overview:
      "If your job involves working with bars and restaurants, this module is a must. We'll address best practices for storing and serving beer, along with the what/ how/ why of draft cleaning and troubleshooting problems with draft systems. Don't call the draft team yet, not if you can save the day for your account!",
  },
  {
    key: "cicerone-study-prep",
    title: "Cicerone Study/Prep",
    triggerClass: "cicerone-prep",
    category: "PRODUCT KNOWLEDGE",
    audience: "BEER INDUSTRY PERSONNEL, BEER ENTHUSIASTS, BEER CENTRIC RETAILERS",
    delivery: "INSTRUCTOR-LED",
    duration: "1-2 HOURS",
    prereqs: "INTRO TO BEER – INCLUDED IN THE UNDERSTANDING BEER PROGRAM",
    overview:
      "Whether you're preparing for the certified beer server exam or the certified Cicerone (2nd level) this module will increase your confidence (over 90% of participants have passed). Showcase your knowledge with one of the most prestigious certifications in our industry.",
  },
  {
    key: "introduction-to-wine",
    title: "Introduction to Wine",
    triggerClass: "intro-to-wine",
    category: "PRODUCT KNOWLEDGE",
    audience: "WINE INDUSTRY PERSONNEL, WINE ENTHUSIASTS, TEAM-BUILDING FOCUSED CO.'S",
    delivery: "INSTRUCTOR-LED",
    duration: "3-4 HOURS",
    prereqs: "NONE",
    overview:
      "Knowing your way around a wine list is more than a social perk, it can be a strategic business advantage. Whether you're selling wine, hosting clients, or attending formal dinners, wine knowledge can help you navigate high-level social situations with confidence and sophistication.",
  },
];

export default function ProductKnowledgeSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="w-[80%] max-w-[1080px] mx-auto text-center">
        <h2 className="text-[28px] md:text-[36px] font-medium text-[#112337] pb-2">
          Product Knowledge Program Descriptions
        </h2>
        <p className="text-[#686e77] pb-10">
          Click each box to learn more about the program including an overview, the recommended
          audience, duration, etc.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <button
              key={p.key}
              type="button"
              className={`${p.triggerClass} group relative flex h-[220px] flex-col items-center justify-center rounded-sm p-6 text-white shadow-md transition-transform hover:scale-[1.02] focus:outline-none`}
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, #b23fd6 0%, #9024b8 45%, #6b0f8c 100%)",
              }}
              onClick={() => setOpenKey(p.key)}
              aria-haspopup="dialog"
              aria-controls={p.key}
            >
              <span className="text-lg font-semibold leading-snug">{p.title}</span>
              <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-white/90 underline">
                More Details
              </span>
            </button>
          ))}
        </div>
      </div>

      {programs.map((p) => (
        <div
          key={p.key}
          id={p.key}
          hidden={openKey !== p.key}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${p.key}-title`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        >
          <div className="relative w-full max-w-lg rounded-md bg-white p-8 shadow-xl">
            <button
              type="button"
              aria-label="Close"
              className="absolute right-4 top-4 text-2xl leading-none text-[#686e77] hover:text-[#112337]"
              onClick={() => setOpenKey(null)}
            >
              &times;
            </button>
            <h3 id={`${p.key}-title`} className="text-2xl font-semibold text-[#112337] pb-4">
              {p.title}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wide text-[#607382] pb-1">
              CATEGORY: {p.category}
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-[#607382] pb-1">
              AUDIENCE: {p.audience}
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-[#607382] pb-1">
              DELIVERY: {p.delivery}
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-[#607382] pb-1">
              DURATION: {p.duration}
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-[#607382] pb-4">
              PRE-REQUISITES: {p.prereqs}
            </p>
            <h4 className="text-base font-semibold text-[#112337] pb-2">Overview</h4>
            <p className="text-[#666] leading-relaxed">{p.overview}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
