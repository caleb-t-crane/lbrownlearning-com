'use client';

import { useState } from "react";

interface ModalData {
  id: string;
  title: string;
  category: string;
  audience: string;
  delivery: string;
  duration: string;
  prereq: string;
  overview: string;
}

const modals: ModalData[] = [
  {
    id: "next-level-powerpoint-25-tips-you-didnt-know-you-needed-2",
    title: "Next-Level PowerPoint: 25 Tips You Didn&apos;t Know You Needed",
    category: "PERSONAL PRODUCTIVITY",
    audience: "POWERPOINT USERS & PRESENTERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "4-HOURS",
    prereq: "NONE",
    overview:
      "PowerPoint is much more than a presentation tool. Learn and practice features that turn slides into engaging, dynamic tools, increase the visual impact of your slides, get time-saving tips, pick up design techniques and cool tricks that can be applied to documents. You&rsquo;ll leave saying &ldquo;I didn&rsquo;t know PowerPoint could do that!&rdquo;",
  },
  {
    id: "the-speaking-advantage-2",
    title: "The Speaking Advantage",
    category: "PERSONAL PRODUCTIVITY",
    audience: "PRESENTERS & PUBLIC SPEAKERS",
    delivery: "INSTRUCTOR-LED",
    duration: "1-DAY/ 8- HOURS",
    prereq: "NONE",
    overview:
      "Whether you&rsquo;re leading a team or making small talk at a networking event, strong speaking skills build confidence, clarity, and credibility. Learn to lead meetings with confidence, present ideas that stick, or just speak up without stumbling.",
  },
  {
    id: "5-choices-to-extraordinary-productivity",
    title: "5 Choices to Extraordinary Productivity",
    category: "PERSONAL PRODUCTIVITY",
    audience: "INDIVIDUAL CONTRIBUTORS, EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "1.5-DAYS/ 12-HOURS",
    prereq: "NONE (LICENSING REQUIRED)",
    overview:
      "The 5 Choices is time management redefined for the 21st century. It increases the productivity of individuals, teams, and organizations, and empowers you to make more selective, high-impact choices about where to invest your time, attention and energy.",
  },
  {
    id: "effective-habits-11-coaching-2",
    title: "Effective Habits 1:1 Coaching",
    category: "PERSONAL PRODUCTIVITY",
    audience: "INDIVIDUAL CONTRIBUTORS, EMERGING LEADERS, MANAGERS",
    delivery: "VIRTUAL – ONE ON ONE PROGRAM",
    duration: "8, 2-HOUR SESSIONS",
    prereq: "NONE",
    overview:
      "This virtual walk thru of the 7 Habits of Highly Effective People is built completely around your schedule and is perfect for leaders who struggle with finding time to attend a 2-day class (or want to learn individually vs. being part of a larger group).",
  },
  {
    id: "7-habits-of-highly-effective-people-franklincovey-2",
    title: "7 Habits of Highly Effective People - FranklinCovey",
    category: "PERSONAL PRODUCTIVITY",
    audience: "INDIVIDUAL CONTRIBUTORS, EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-DAYS/ 16-HOURS",
    prereq: "NONE (LICENSING REQUIRED)",
    overview:
      "7 Habits helps your organization achieve sustained superior results by focusing on making individuals and leaders more effective. During the program, participants learn 7 critical habits that improve self-discipline, communication, teamwork, and goal setting &ndash; leading to higher effectiveness and increased success.",
  },
  // Rendered for completeness (leadership & management duplicates) — hidden, no visible trigger on this page.
  {
    id: "next-level-powerpoint-25-tips-you-didnt-know-you-needed",
    title: "Next-Level PowerPoint: 25 Tips You Didn&apos;t Know You Needed",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "4-HOURS",
    prereq: "NONE",
    overview:
      "PowerPoint is much more than a presentation tool. Learn and practice features that turn slides into engaging, dynamic tools, increase the visual impact of your slides, get time-saving tips, pick up design techniques and cool tricks that can be applied to documents. You&rsquo;ll leave saying &ldquo;I didn&rsquo;t know PowerPoint could do that!&rdquo;",
  },
  {
    id: "effective-habits-11-coaching",
    title: "Effective Habits 1:1 Coaching",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "VIRTUAL – ONE ON ONE PROGRAM",
    duration: "8, 2-HOUR SESSIONS",
    prereq: "NONE",
    overview:
      "This virtual walk thru of the 7 Habits of Highly Effective People is built completely around your schedule and is perfect for leaders who struggle with finding time to attend a 2-day class (or want to learn individually vs. with a group).",
  },
  {
    id: "7-habits-of-highly-effective-people-franklincovey",
    title: "7 Habits of Highly Effective People - FranklinCovey",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-DAYS/ 16-HOURS",
    prereq: "NONE (LICENSING REQUIRED)",
    overview:
      "7 Habits helps your organization achieve sustained superior results by focusing on making individuals and leaders more effective. During the program, participants learn 7 critical habits that improve self-discipline, communication, teamwork, and goal setting &ndash; leading to higher effectiveness and increased success.",
  },
];

const cards = [
  {
    title: "7 Habits of Highly Effective People - FranklinCovey",
    modalId: "7-habits-of-highly-effective-people-franklincovey-2",
  },
  {
    title: "Effective Habits 1:1 Coaching",
    modalId: "effective-habits-11-coaching-2",
  },
  {
    title: "5 Choices to Extraordinary Productivity",
    modalId: "5-choices-to-extraordinary-productivity",
  },
  {
    title: "The Speaking Advantage",
    modalId: "the-speaking-advantage-2",
  },
  {
    title: "Next-Level PowerPoint: 25 Tips You Didn&apos;t Know You Needed",
    modalId: "next-level-powerpoint-25-tips-you-didnt-know-you-needed-2",
  },
];

export default function PersonalProductivityPrograms() {
  const [openId, setOpenId] = useState<string | null>(null);

  const activeModal = modals.find((m) => m.id === openId) || null;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <button
            key={card.modalId}
            type="button"
            onClick={() => setOpenId(card.modalId)}
            className="group relative aspect-[4/3] rounded overflow-hidden text-white text-center p-4 flex items-center justify-center bg-gradient-to-b from-[#e8843c] to-[#c9691f] shadow-md hover:opacity-90 transition-opacity"
          >
            <span className="font-semibold text-base leading-snug">{card.title}</span>
          </button>
        ))}
      </div>

      {/* Render every modal in the DOM, hidden until opened */}
      {modals.map((m) => (
        <div
          key={m.id}
          id={m.id}
          hidden={openId !== m.id}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpenId(null)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-lg max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-xl">
            <button
              type="button"
              onClick={() => setOpenId(null)}
              aria-label="Close"
              className="absolute top-3 right-3 text-[#666] hover:text-[#333] text-2xl leading-none"
            >
              &times;
            </button>
            <h3 className="text-xl md:text-2xl font-semibold text-[#333] pb-3">{m.title}</h3>
            <p className="text-sm text-[#585e6a] pb-1">
              <strong>CATEGORY:</strong> {m.category}
            </p>
            <p className="text-sm text-[#585e6a] pb-1">
              <strong>AUDIENCE:</strong> {m.audience}
            </p>
            <p className="text-sm text-[#585e6a] pb-1">
              <strong>DELIVERY:</strong> {m.delivery}
            </p>
            <p className="text-sm text-[#585e6a] pb-1">
              <strong>DURATION:</strong> {m.duration}
            </p>
            <p className="text-sm text-[#585e6a] pb-4">
              <strong>PRE-REQUISITES:</strong> {m.prereq}
            </p>
            <h4 className="text-lg font-semibold text-[#333] pb-2">Overview</h4>
            <p
              className="text-[#666] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: m.overview }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
