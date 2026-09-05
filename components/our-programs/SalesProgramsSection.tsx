'use client';

import { useState } from 'react';

interface Program {
  id: string;
  cardLabel: string;
  modalTitle: string;
  category: string;
  audience: string;
  delivery: string;
  duration: string;
  prereq: string;
  overview: string;
}

const programs: Program[] = [
  {
    id: 'introduction-to-sales',
    cardLabel: 'Introduction to Sales',
    modalTitle: 'Introduction to Sales',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, MERCHANDISERS, MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1-DAY/ 8-HOUR',
    prereq: 'NONE',
    overview:
      'Employees armed with the knowledge and tools needed for their jobs will excel quickly. Route management topics bundled together to put salespeople on the path to success and run effective territories.',
  },
  {
    id: 'sales-boot-camp',
    cardLabel: 'Sales Boot Camp',
    modalTitle: 'Sales Boot Camp',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, KEY ACCOUNT MGRS.',
    delivery: 'INSTRUCTOR-LED',
    duration: '2-DAYS/ 16-HOURS',
    prereq: 'INTRO TO SALES PREFERRED',
    overview:
      'Professional selling skills are important, especially when you need more than a relationship to execute. Practice and role play skills needed to build presentations and have fact-based sales conversations.',
  },
  {
    id: 'advanced-selling-skills',
    cardLabel: 'Advanced Selling Skills',
    modalTitle: 'Advanced Selling Skills',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, KEY ACCOUNT MGRS.',
    delivery: 'INSTRUCTOR-LED',
    duration: '1-DAY/ 8-HOURS',
    prereq: 'SALES BOOT CAMP',
    overview:
      'Build on skills from sales boot camp while using recorded presentations to coach and guide sales reps to perfect their presentation delivery. More time and attention spent on handling objections.',
  },
  {
    id: 'communication-sales-reps',
    cardLabel: 'Communication (Sales Reps)',
    modalTitle: 'Communication (Sales Reps)',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, KEY ACCOUNT MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '2-3 HOURS',
    prereq: 'NONE',
    overview:
      'Communication with others plays a major factor on the results in your route. Understand the fundamentals of sending messages, body language, active listening, note taking, and choosing the best tools and when.',
  },
  {
    id: 'conflict-resolution-sales-reps',
    cardLabel: 'Conflict Resolution (Sales Reps)',
    modalTitle: 'Conflict Resolution (Sales Reps)',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, KEY ACCOUNT MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '2-3 HOURS',
    prereq: 'NONE',
    overview:
      'Be prepared to solve people problems in your territory. It isn&apos;t a matter of &quot;if&quot; they occur, but &quot;when&quot; and &quot;how often&quot;. Learn to skillfully navigate situations to restore healthy relationships at work and home.',
  },
  {
    id: 'planning-time-mgt-sales-reps',
    cardLabel: 'Planning & Time Management (Sales Reps)',
    modalTitle: 'Planning & Time Mgt. (Sales Reps)',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, KEY ACCOUNT MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '3-4 HOURS',
    prereq: 'NONE',
    overview:
      'Salespeople are often asked to fit many sales and non-sales activities into each day. Learn the fundamentals of planning, goal setting, prioritizing, scheduling and using effective systems to get more done.',
  },
  {
    id: 'being-a-successful-salesperson',
    cardLabel: 'Being A Successful Salesperson',
    modalTitle: 'Being a Successful Salesperson',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, MERCHANDISERS',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1 HOUR',
    prereq: 'NONE',
    overview:
      'The right perspective is important when starting a sales position. Separate yourself from stereotypes by demonstrating behaviors that elevate you into a trusted partner. Someone who consults to achieve results.',
  },
  {
    id: 'areas-of-responsibility',
    cardLabel: 'Areas of Responsibility',
    modalTitle: 'Areas of Responsibility',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, MERCHANDISERS, MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1-2 HOURS',
    prereq: 'NONE',
    overview:
      'A large part of sales success depends on performing well in key areas. Each area can be used to evaluate progress and provide opportunities for coaching for better performance. Learn what your sales role is really all about.',
  },
  {
    id: 'getting-organized-goal-setting',
    cardLabel: 'Getting Organized & Goal Setting',
    modalTitle: 'Getting Organized & Goal Setting',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, MERCHANDISERS',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1 HOUR',
    prereq: 'NONE',
    overview:
      'Typical days for salespeople are fast-paced and extremely busy. Add deadlines and cutoff times for orders, each minute becomes more important. The more organized you become, the more confident you&apos;ll be in your role.',
  },
  {
    id: 'areas-of-focus-on-premise',
    cardLabel: 'Areas fo Foucs: On-Premise',
    modalTitle: 'Areas of Focus: On-Premise',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, MERCHANDISERS, MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1-2 HOURS',
    prereq: 'NONE',
    overview:
      'Take a strategic approach to viewing your territory and each account in it. Next, promote your brands by giving them the best chance to succeed in your market. Become the consistent brand builder for your sales team.',
  },
  {
    id: 'areas-of-focus-off-premise',
    cardLabel: 'Areas of Focus: Off-Premise',
    modalTitle: 'Areas of Focus: Off-Premise',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, MERCHANDISERS, MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1-2 HOURS',
    prereq: 'NONE',
    overview:
      'Take a strategic approach to viewing your territory and each account in it. Next, promote your brands by giving them the best chance to succeed in your market. Become a consistent brand builder for your sales team.',
  },
  {
    id: 'steps-to-a-sales-call',
    cardLabel: 'Steps to Sales Call',
    modalTitle: 'Steps to a Sales Call',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, MERCHANDISERS, MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1-2 HOURS',
    prereq: 'NONE',
    overview:
      'Having a consistent and thorough process calling on accounts saves time, helps identify opportunities, and maximizes results. The process may vary by market and organization, but the discipline and results remain the same.',
  },
  {
    id: 'selling-managing-displays',
    cardLabel: 'Selling and Managing Displays',
    modalTitle: 'Selling & Managing Displays',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, KEY ACCOUNT MGRS., MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1-2 HOURS',
    prereq: 'NONE',
    overview:
      'Displays are an important part of the distribution business and benefits each of the level of the system. Learn best practices in making space, building an effective display presentation, and planning strategies to hit your goals.',
  },
  {
    id: 'pre-planning-for-success',
    cardLabel: 'Pre-Planning for Success',
    modalTitle: 'Pre-Planning for Success',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'SALES REPS, MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1 HOUR',
    prereq: 'NONE',
    overview:
      'Failing to plan means planning to fail. Don&apos;t walk into an account without a plan and how you you&apos;re going to achieve it. Learn and practice skills to increase your results before you walk into any account.',
  },
  {
    id: 'getting-to-know-your-buyers',
    cardLabel: 'Getting to Know Your Buyers',
    modalTitle: 'Getting to Know Your Buyers',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, KEY ACCOUNT MGRS., MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1 HOUR',
    prereq: 'NONE',
    overview:
      'The stronger your relationships, the easier selling becomes. Understanding basic psychology will give you an added advantage and help you tailor your presentations to achieve results. Begin learning the art and science of selling.',
  },
  {
    id: 'preparing-building-delivering-sales-presentations',
    cardLabel: 'Preparing, Building, & Delivering Sales Representation',
    modalTitle: 'Preparing, Building, & Delivering Sales Presentations',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, KEY ACCOUNT MGRS., MGRS.',
    delivery: 'INSTRUCTOR-LED',
    duration: '1-DAY/ 8 HOURS',
    prereq: 'INTRO TO SALES PREFERRED',
    overview:
      'Many factors go into building a great sales presentation. Learn the concepts that increase the chance of getting a &quot;yes&quot; with the tools available. Set yourself up for success and make your next presentation hard to say &quot;no&quot; to. Then, practice delivering your presentation with clarity.',
  },
  {
    id: 'closing-techniques',
    cardLabel: 'Closing Techniques',
    modalTitle: 'Closing Techniques',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, KEY ACCOUNT MGRS., MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1 HOUR',
    prereq: 'PREP & BUILD SLS…PREFERRED',
    overview:
      'A great presentation doesn&apos;t mean much if we don&apos;t ask for the business. Learn and practice multiple ways to ask for a sale. Practice the art of reading the conversation and choosing the perfect close to match your buyer.',
  },
  {
    id: 'handling-objections',
    cardLabel: 'Handling Objections',
    modalTitle: 'Handling Objections',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, KEY ACCOUNT MGRS., MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1 HOUR',
    prereq: 'PREP & BUILD SALE PRES.&apos;S & CLOSING TECHNIQUES PREFERRED',
    overview:
      'If you work in sales long enough, you&apos;ll hear the word &quot;no&quot; plenty of times. Great salespeople know how to effectively handle an objection and turn as many &quot;no&apos;s&quot; into &quot;yes&apos;s&quot; as possible. We&apos;ll learn and practice a proven process to move in a positive direction.',
  },
  {
    id: 'selling-more-with-retail-shelves',
    cardLabel: 'Selling More with Retail Shelves',
    modalTitle: 'Selling More with Retail Shelves',
    category: 'SALES & ROUTE MANAGEMENT',
    audience: 'S. REPS, MERCHANDISERS, KEY ACCOUNT MGRS., MGRS.',
    delivery: 'INSTRUCTOR-LED, VIRTUAL',
    duration: '1 HOUR',
    prereq: 'NONE',
    overview:
      'Product placement is important when selling products from retail shelves. Learn what to look for and ways to have more of your brands end up in a retail customer&apos;s shopping cart. Information about cooler doors shelves included too.',
  },
];

function ProgramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-white/90" fill="currentColor" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function SalesProgramsSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = programs.find((p) => p.id === openId) || null;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => (
          <button
            key={program.id}
            type="button"
            onClick={() => setOpenId(program.id)}
            className="flex h-56 flex-col items-center justify-center gap-3 rounded p-6 text-center text-white shadow-md transition-transform hover:scale-[1.02]"
            style={{
              background:
                'radial-gradient(circle at 50% 60%, #3a8fe0 0%, #1a5fb8 45%, #0d3c80 100%)',
            }}
          >
            <ProgramIcon />
            <span className="text-base font-bold leading-snug">{program.cardLabel}</span>
          </button>
        ))}
      </div>

      {programs.map((program) => (
        <div
          key={program.id}
          id={program.id}
          hidden={openId !== program.id}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <div className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded bg-white p-8 shadow-xl">
            <button
              type="button"
              onClick={() => setOpenId(null)}
              aria-label="Close"
              className="absolute right-3 top-3 text-2xl leading-none text-[#585e6a] hover:text-[#112337]"
            >
              &times;
            </button>
            <h3 className="mb-4 text-2xl font-semibold text-[#112337]">{program.modalTitle}</h3>
            <dl className="mb-4 grid grid-cols-1 gap-2 text-sm text-[#585e6a] sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-[#112337]">Category</dt>
                <dd>{program.category}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#112337]">Audience</dt>
                <dd>{program.audience}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#112337]">Delivery</dt>
                <dd>{program.delivery}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#112337]">Duration</dt>
                <dd>{program.duration}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-[#112337]">Pre-requisites</dt>
                <dd>{program.prereq}</dd>
              </div>
            </dl>
            <h4 className="mb-2 text-lg font-semibold text-[#112337]">Overview</h4>
            <p
              className="text-[#585e6a]"
              dangerouslySetInnerHTML={{ __html: program.overview }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
