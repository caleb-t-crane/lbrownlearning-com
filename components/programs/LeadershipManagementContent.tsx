'use client';

import { useState } from "react";
import Link from "next/link";

interface ProgramModal {
  id: string;
  trigger: string;
  title: string;
  category: string;
  audience: string;
  delivery: string;
  duration: string;
  prereq: string;
  overview: string;
}

const cards: ProgramModal[] = [
  {
    id: "leadership-essentials-transforming-managers-into-leaders",
    trigger: "leadership-essentials",
    title: "Leadership Essentials: Transforming Managers Into Leaders",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2.5 DAYS/ 20 HOURS",
    prereq: "NONE",
    overview:
      "Start preparing your next wave of leaders today. This program is designed to improve the leadership skills of emerging leaders or upskill current managers. Building a strong bench of leaders is important to the long-term success of any organization.",
  },
  {
    id: "7-habits-of-highly-effective-people-franklincovey",
    trigger: "seven-habits",
    title: "7 Habits of Highly Effective People - FranklinCovey",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-DAYS/ 16-HOURS",
    prereq: "NONE (LICENSING REQUIRED)",
    overview:
      "7 Habits helps your organization achieve sustained superior results by focusing on making individuals and leaders more effective. During the program, participants learn 7 critical habits that improve self-discipline, communication, teamwork, and goal setting – leading to higher effectiveness and increased success.",
  },
  {
    id: "effective-habits-11-coaching",
    trigger: "effective-habits-coaching",
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
    id: "transforming-sales-managers-into-sales-coaches",
    trigger: "sales-coaches",
    title: "Transforming Sales Managers Into Sales Coaches",
    category: "SALES MANAGEMENT",
    audience: "SALES MANAGEMENT",
    delivery: "INSTRUCTOR-LED",
    duration: "2-DAYS/ 16-HOURS",
    prereq: "INTRO TO SALES PREFERRED",
    overview:
      "Develop sales managers who are not only good at tracking, reporting, and admin but can also maximize the performance of each salesperson. Learn concepts and practice ideas that help managers “coach in the moment” whether they’re in an account, a meeting or over the phone.",
  },
  {
    id: "the-speaking-advantage",
    trigger: "speaking-advantage",
    title: "The Speaking Advantage",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED",
    duration: "1-DAY/ 8- HOURS",
    prereq: "NONE",
    overview:
      "Whether you’re leading a team or making small talk at a networking event, strong speaking skills build confidence, clarity, and credibility. Learn to lead meetings with confidence, present ideas that stick or just speak up without stumbling.",
  },
  {
    id: "next-level-powerpoint-25-tips-you-didnt-know-you-needed",
    trigger: "next-level-powerpoint",
    title: "Next-Level PowerPoint: 25 Tips You Didn't Know You Needed",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "4-HOURS",
    prereq: "NONE",
    overview:
      "PowerPoint is much more than a presentation tool. Learn and practice features that turn slides into engaging, dynamic tools, increase the visual impact of your slides, get time-saving tips, pick up design techniques and cool tricks that can be applied to documents. You’ll leave saying “I didn’t know PowerPoint could do that!”",
  },
  {
    id: "the-art-of-effective-meetings",
    trigger: "effective-meetings",
    title: "The Art of Effective Meetings",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "2-HOURS",
    prereq: "NONE",
    overview:
      "Meetings are an important and expensive touchpoint for managers and their teams. Make sure that you’re having meetings for the right reasons and delivering a return that’s worth the time and effort.",
  },
  {
    id: "the-art-of-effective-virtual-meetings",
    trigger: "art-of-virtual-meetings",
    title: "The Art of Effective Virtual Meetings",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "2-HOURS",
    prereq: "NONE",
    overview:
      "In today’s post-pandemic workplace, virtual meetings are no longer temporary solutions, they are a permanent part of how teams connect and collaborate. This program helps strengthen meeting leaders’ ability to maximize and create stronger virtual meeting experiences.",
  },
  {
    id: "winning-sales-work-withs-coaching-in-the-car-the-account",
    trigger: "sales-work-withs",
    title: "Winning Sales Work-Withs: Coaching in the Car & the Account",
    category: "SALES MANAGEMENT",
    audience: "SALES MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "2-HOURS",
    prereq: "LEADERSHIP ESSENTIALS",
    overview:
      "Each time a manager works with a salesperson, they should add value in 2 ways – helping them get results and providing training to improve performance. Learn and practice ways to make a work-with one of the most important sales management activities.",
  },
  {
    id: "navigating-difficult-conversations",
    trigger: "difficult-conversations",
    title: "Navigating Difficult Conversations",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "1.5 HOURS",
    prereq: "LEADERSHIP ESS. PREFERRED",
    overview:
      "Sometimes difficult conversations are needed with employees to move forward in a positive direction. Learn and practice ways to have an effective conversation when boundaries need to be set, performance needs to be improved, or to clear up a misunderstanding.",
  },
  {
    id: "winning-teams-what-business-leaders-can-learn-from-football-coaches",
    trigger: "winning-teams",
    title: "Winning Teams: What Business Leaders Can Learn From Football Coaches",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED",
    duration: "1.5 HOURS",
    prereq: "NONE",
    overview:
      "What are the high-level strategies that make (American) football coaches successful? Better yet, how can they relate to the business world? You’ll find many concepts are repeatable even though they don’t come with a fight song.",
  },
  {
    id: "great-leader-great-manager-why-not-both",
    trigger: "great-leader-manager",
    title: "Great Leader, Great Manager: Why Not Both?",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "3 HOURS",
    prereq: "NONE – INCLUDED IN THE LEADERSHIP ESSENTIALS PROGRAM",
    overview:
      "Effective management and leadership are not the same skills. Most high-performing organizations require both. This program helps participants understand the distinct competencies of each role and the ability to integrate both into their daily practices. When employees feel guided and inspired, they respond with stronger performance and commitment.",
  },
  {
    id: "communicating-to-win",
    trigger: "communicating-to-win",
    title: "Communicating to Win",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "3-HOURS",
    prereq: "NONE – INCLUDED IN THE LEADERSHIP ESSENTIALS PROGRAM",
    overview:
      "Communication is the most critical skill for leaders and managers. It shapes culture, drives performance, and determines how effectively strategy turns into action. The good news: communication is a skill, and skills can be developed. Expect stronger team performance, clearer direction, and fewer misunderstandings.",
  },
  {
    id: "motivating-teams",
    trigger: "motivating-teams",
    title: "Motivating Teams",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "2-HOURS",
    prereq: "NONE – INCLUDED IN THE LEADERSHIP ESSENTIALS PROGRAM",
    overview:
      "The ability to motivate employees is both an art and a science. Once you understand the keys to success, you’ll gain a new perspective and respect for your team members. Next, you’ll change how you interact with each other to achieve greater team results.",
  },
  {
    id: "the-art-science-of-training-others",
    trigger: "training-others",
    title: "The Art & Science of Training Others",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "3-HOURS",
    prereq: "NONE – INCLUDED IN THE LEADERSHIP ESSENTIALS PROGRAM",
    overview:
      "The greatest managers are also the best trainers. People who understand the importance of getting work done through the effort of others. Great managers also prepare others for advancement. Learn and practice effective training methods that make training stick and employees grow.",
  },
  {
    id: "skillfully-resolving-conflict",
    trigger: "resolving-conflict",
    title: "Skillfully Resolving Conflict",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "2-HOURS",
    prereq: "NONE – INCLUDED IN THE LEADERSHIP ESSENTIALS PROGRAM",
    overview:
      "When human beings interact in the workplace, there are bound to be problems. Great managers take the lead and skillfully resolve conflict between employees, departments, customers or all three. Learn and practice this important skill with other participants.",
  },
  {
    id: "doing-what-matters-planning-time-management",
    trigger: "planning-time-management",
    title: "Doing What Matters: Planning & Time Management",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "2-3 HOURS",
    prereq: "NONE – INCLUDED IN THE LEADERSHIP ESSENTIALS PROGRAM",
    overview:
      "The best leaders maximize their time and get the most important things done. This involves looking ahead, managing current projects and prioritizing, especially when conflicts occur. Learn and practice what it means to maximize your time and the time of your team.",
  },
  {
    id: "leadership-lessons-from-t-c-williams-high-school",
    trigger: "tc-williams-lessons",
    title: "Leadership Lessons From T.C. Williams High School",
    category: "LEADERSHIP & MANAGEMENT",
    audience: "EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED",
    duration: "3-HOURS",
    prereq: "NONE – INCLUDED IN THE LEADERSHIP ESSENTIALS PROGRAM",
    overview:
      "Take a trip to Alexandria, Virgina to visit the historic TC Williams Titans. Learn the leadership lessons that turned their athletic program around and changed the community. Based on a true story, this motion picture will show you the impact of the leadership lessons in this program.",
  },
];

// Additional hidden panels required by the extraction for this route but not
// triggered by a visible card on this page (they belong to duplicate program
// listings elsewhere). Kept mounted & hidden per the "always render, never
// conditionally mount" rule.
const extraHiddenModals: ProgramModal[] = [
  {
    id: "next-level-powerpoint-25-tips-you-didnt-know-you-needed-2",
    trigger: "next-level-powerpoint-2",
    title: "Next-Level PowerPoint: 25 Tips You Didn't Know You Needed",
    category: "PERSONAL PRODUCTIVITY",
    audience: "POWERPOINT USERS & PRESENTERS",
    delivery: "INSTRUCTOR-LED, VIRTUAL",
    duration: "4-HOURS",
    prereq: "NONE",
    overview:
      "PowerPoint is much more than a presentation tool. Learn and practice features that turn slides into engaging, dynamic tools, increase the visual impact of your slides, get time-saving tips, pick up design techniques and cool tricks that can be applied to documents. You’ll leave saying “I didn’t know PowerPoint could do that!”",
  },
  {
    id: "effective-habits-11-coaching-2",
    trigger: "effective-habits-coaching-2",
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
    trigger: "seven-habits-2",
    title: "7 Habits of Highly Effective People - FranklinCovey",
    category: "PERSONAL PRODUCTIVITY",
    audience: "INDIVIDUAL CONTRIBUTORS, EMERGING LEADERS, MANAGERS",
    delivery: "INSTRUCTOR-LED",
    duration: "2-DAYS/ 16-HOURS",
    prereq: "NONE (LICENSING REQUIRED)",
    overview:
      "7 Habits helps your organization achieve sustained superior results by focusing on making individuals and leaders more effective. During the program, participants learn 7 critical habits that improve self-discipline, communication, teamwork, and goal setting – leading to higher effectiveness and increased success.",
  },
];

const allModals = [...cards, ...extraHiddenModals];

function ProgramModal({
  modal,
  open,
  onClose,
}: {
  modal: ProgramModal;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      id={modal.id}
      hidden={!open}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${modal.id}-title`}
    >
      <div className="relative w-full max-w-xl rounded bg-white p-6 shadow-2xl md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 text-2xl leading-none text-[#666] hover:text-[#112337]"
        >
          &times;
        </button>
        <h3 id={`${modal.id}-title`} className="mb-4 text-xl font-bold text-[#112337] md:text-2xl">
          {modal.title}
        </h3>
        <div className="mb-4 grid grid-cols-1 gap-1 text-xs font-bold uppercase tracking-wide text-[#585e6a] sm:grid-cols-2">
          <p>CATEGORY: {modal.category}</p>
          <p>AUDIENCE: {modal.audience}</p>
          <p>DELIVERY: {modal.delivery}</p>
          <p>DURATION: {modal.duration}</p>
          <p className="sm:col-span-2">PRE-REQUISITES: {modal.prereq}</p>
        </div>
        <h4 className="mb-2 font-bold text-[#112337]">Overview</h4>
        <p className="text-[#666]">{modal.overview}</p>
      </div>
    </div>
  );
}

function QuickInquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    data.forEach((v, k) => body.append(k, String(v)));
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      id="leadership-management-inquiry-modal"
      hidden={!open}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-inquiry-title"
    >
      <div className="relative w-full max-w-md rounded bg-white p-6 shadow-2xl md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 text-2xl leading-none text-[#666] hover:text-[#112337]"
        >
          &times;
        </button>
        <h3 id="quick-inquiry-title" className="mb-4 text-xl font-bold text-[#112337]">
          Start a Discovery Conversation
        </h3>

        {status === "sent" ? (
          <p className="text-base font-semibold text-[#204ce5]">
            Thank you! Your message has been sent. We will be in touch shortly.
          </p>
        ) : (
          <form
            name="leadership-management-inquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="leadership-management-inquiry" />
            <p hidden>
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="flex flex-col gap-1">
              <label htmlFor="input_1_3" className="text-sm font-semibold text-[#112337]">
                Name
              </label>
              <input
                id="input_1_3"
                type="text"
                name="input_1.3"
                required
                className="rounded border border-[#ccc] px-3 py-2 text-sm text-[#666] focus:border-[#204ce5] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="input_3" className="text-sm font-semibold text-[#112337]">
                Email
              </label>
              <input
                id="input_3"
                type="email"
                name="input_3"
                required
                className="rounded border border-[#ccc] px-3 py-2 text-sm text-[#666] focus:border-[#204ce5] focus:outline-none"
              />
            </div>

            {/* reCAPTCHA / Gravity Forms embeds preserved from the original page */}
            <iframe src="about:blank" title="hidden-frame" className="hidden" />
            <iframe
              src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcfpCctAAAAAOKymTsTOG-emU3-MHjF7i2JYGks&co=aHR0cHM6Ly9sYnJvd25sZWFybmluZy5jb206NDQz&hl=en&v=8x-4t2pegToiW8KmThtO4AQt&size=invisible&anchor-ms=20000&execute-ms=30000&cb=6h7vs7w0y2uy"
              title="recaptcha"
              className="hidden"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-block rounded bg-[#204ce5] px-6 py-3 text-center font-bold uppercase text-white transition hover:bg-[#001ab3] disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default function LeadershipManagementContent() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div
          className="relative flex min-h-[460px] items-center bg-[#112337] bg-cover bg-center px-6 py-20 text-center md:min-h-[560px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,35,55,0.55), rgba(17,35,55,0.55)), url(/assets/screenshot-2026-05-07-at-2.10.17-pm.png)",
          }}
        >
          <div className="mx-auto flex w-full max-w-[823px] flex-col items-center gap-6">
            <h1 className="text-3xl font-bold text-white md:text-5xl">Leadership &amp; Management</h1>
            <p className="text-lg text-white/90 md:text-xl">
              Prepare your emerging leaders and enable current managers to bring out the best in their
              people.
            </p>
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="inline-block rounded bg-[#204ce5] px-8 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-[#001ab3]"
            >
              Start a Discovery Conversation
            </button>
          </div>
        </div>
      </section>

      {/* PROGRAM DESCRIPTIONS */}
      <section className="container mx-auto w-[90%] max-w-[1080px] py-16">
        <div className="mx-auto mb-4 max-w-[823px] text-center">
          <h2 className="mb-2 text-2xl font-bold text-[#333] md:text-3xl">
            Leadership &amp; Management Program Descriptions
          </h2>
          <p className="text-[#666]">
            Click each box to learn more about the program including an overview, the recommended
            audience, duration, etc.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              <button
                type="button"
                onClick={() => setActiveModal(card.id)}
                className={`${card.trigger} flex min-h-[160px] flex-col items-center justify-center rounded-t bg-gradient-to-br from-[#7bc142] to-[#3e7c17] p-6 text-center transition hover:opacity-90`}
              >
                <h4 className="text-base font-bold text-white">{card.title}</h4>
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(card.id)}
                className="rounded-b border border-t-0 border-[#eee] bg-white py-2 text-center text-sm font-bold uppercase text-[#204ce5] hover:bg-[#f5f5f5]"
              >
                More Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / IMAGE BAND */}
      <section
        className="relative bg-[#112337] bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,35,55,0.75), rgba(17,35,55,0.75)), url(/assets/man_and_woman_training_202605070251.jpeg)",
        }}
      >
        <div className="container mx-auto w-[90%] max-w-[823px] text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Ready to Strengthen Your Internal Training?
          </h2>
          <p className="mb-6 text-white/90">
            Whether you need customized training materials built from scratch or strategic fractional
            L&amp;D consulting to revamp your current offerings, we are here to help. Let&apos;s discuss
            your organization&apos;s unique challenges and goals.
          </p>
          <a
            href="/assets/training-program-bundles-updated.pdf"
            className="inline-block rounded bg-[#204ce5] px-8 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-[#001ab3]"
          >
            Review Training Bundles
          </a>
        </div>
      </section>

      {/* MODALS - always rendered, toggled via hidden attribute */}
      {allModals.map((modal) => (
        <ProgramModal
          key={modal.id}
          modal={modal}
          open={activeModal === modal.id}
          onClose={() => setActiveModal(null)}
        />
      ))}

      <QuickInquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />

      {/* FLOATING CALL NOW BUTTON */}
      <a
        href="tel:3174375475"
        className="group fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-[#2ea3f2] p-4 text-white shadow-lg transition hover:bg-[#204ce5]"
        aria-label="Call Now"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
        </svg>
        <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded bg-[#585e6a] px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
          Call Now
        </span>
      </a>
    </main>
  );
}
