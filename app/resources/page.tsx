import type { Metadata } from 'next';
import CatalogModal from '@/components/resources/CatalogModal';
import ResourceLink from '@/components/resources/ResourceLink';

export const metadata: Metadata = {
  title: 'Free Learning Resources & Tools | LBrown Learning',
  description:
    'Explore free learning resources, guides, and tools to boost your skills. Download expert content designed to support your growth journey.',
};

const employeeNuggets = [
  { label: 'October 2025 - EEs', href: '/assets/training-nuggets-october-2025-ees.pdf' },
  { label: 'November 2025 - EEs', href: '/assets/training-nuggets-november-2025-ees.pdf' },
  { label: 'January 2026 - EEs', href: '/assets/training-nuggets-january-2026-ees.pdf' },
  { label: 'February 2026 - EEs', href: '/assets/training-nuggets-february-2026-ees.pdf' },
  { label: 'March 2026 - EEs', href: '/assets/training-nuggets-march-2026-ees.pdf' },
  { label: 'April 2026 - EEs', href: '/assets/training-nuggets-4.28.26-ees.pdf' },
];

const managerNuggets = [
  { label: 'October 2025 - Mgrs', href: '/assets/training-nuggets-october-2025-mgrs.pdf' },
  { label: 'December 2025 - Mgrs', href: '/assets/training-nuggets-december-2025-mgrs.pdf' },
  { label: 'January 2026 - Mgrs', href: '/assets/training-nuggets-january-2026-mgrs.pdf' },
  { label: 'February 2026 - Mgrs', href: '/assets/training-nuggets-february-2026-mgrs.pdf' },
  { label: 'March 2026 - Mgrs', href: '/assets/training-nuggets-march-2026-mgrs.pdf' },
  { label: 'April 2026 - Mgrs', href: '/assets/training-nuggets-4.29.26-mgrs.pdf' },
];

const changeManagement = [
  { label: 'Logical-Emotional', href: '/assets/change-1-logical-emotional-pdf.pdf' },
  { label: 'Feels Like Loss', href: '/assets/change-2-feels-like-loss-pdf.pdf' },
  { label: 'The Why Matters', href: '/assets/change-3-the-why-matters-pdf.pdf' },
  { label: 'Clarity Reduces Anxiety', href: '/assets/change-4-clarity-reduces-anxiety-pdf.pdf' },
  { label: 'Transition Process', href: '/assets/change-5-transition-process-pdf.pdf' },
  { label: 'Resistance is Information', href: '/assets/change-6-resistance-is-information-pdf.pdf' },
  { label: 'Adaptability Career Skill', href: '/assets/change-7-adaptability-career-skill-pdf.pdf' },
  { label: 'Communication 2 Way', href: '/assets/change-8-communication-2-way-pdf.pdf' },
  { label: 'Training and Support', href: '/assets/change-9-training-and-support-pdf.pdf' },
  { label: 'Productivity Dip', href: '/assets/change-10-productivity-dip-pdf.pdf' },
  { label: 'Trust Impact', href: '/assets/change-11-trust-impact-pdf.pdf' },
  { label: 'Focus on Control', href: '/assets/change-12-focus-on-control-pdf.pdf' },
];

const calendars = [
  { label: 'June', href: '/assets/2026-june-calendar.pdf' },
  { label: 'July', href: '/assets/2026-july-calendar.pdf' },
  { label: 'August', href: '/assets/2026-august-calendar.pdf' },
  { label: 'September', href: '/assets/2026-september-calendar.pdf' },
  { label: 'October', href: '/assets/2026-october-calendar.pdf' },
  { label: 'November', href: '/assets/2026-november-calendar.pdf' },
  { label: 'December', href: '/assets/2026-december-calendar.pdf' },
];

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#004a8c]">
        <div className="relative h-[180px] md:h-[220px]" />
        <div
          className="relative h-[380px] md:h-[420px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/man_and_woman_training_202605070251.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon fill="currentColor" points="0,40 1280,20 1280,40" />
        </svg>
      </section>

      <div className="w-[90%] max-w-5xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#333] pb-4">Resources</h1>
        <p className="text-[#666] leading-relaxed pb-8">
          Click the buttons below to view the resource in a new window.
        </p>

        {/* Catalog */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#eee] pb-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#333]">2026 Professional Development Catalog</h2>
          <CatalogModal />
        </div>
      </div>

      {/* Blue section: Employee & Manager nuggets */}
      <section className="relative bg-[#00548e]">
        <svg
          className="absolute -top-px left-0 w-full text-white"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon fill="currentColor" points="0,0 1280,0 1280,20 0,40" />
        </svg>

        <div className="w-[90%] max-w-5xl mx-auto py-16 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold text-white pb-6">Training Nuggets for Employees</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12">
            {employeeNuggets.map((r) => (
              <ResourceLink key={r.label} href={r.href} label={r.label} />
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-white pb-6">Training Nuggets for Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {managerNuggets.map((r) => (
              <ResourceLink key={r.label} href={r.href} label={r.label} />
            ))}
          </div>
        </div>

        <svg
          className="absolute -bottom-px left-0 w-full text-white"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon fill="currentColor" points="0,40 1280,40 1280,20 0,0" />
        </svg>
      </section>

      {/* Change Management */}
      <div className="w-[90%] max-w-5xl mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333] pb-6">Change Management</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
          {changeManagement.map((r) => (
            <ResourceLink key={r.label} href={r.href} label={r.label} />
          ))}
        </div>
      </div>

      {/* Beer Style Sheets */}
      <div className="w-[90%] max-w-5xl mx-auto pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333] pb-6">Beer Style Sheets</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ResourceLink href="/assets/irish-stout-style-sheet-lb-ld.pdf" label="Irish Stout" />
        </div>
      </div>

      {/* Calendars */}
      <div className="w-[90%] max-w-5xl mx-auto pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#333] pb-6">2026 Calendars</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {calendars.map((r) => (
            <ResourceLink key={r.label} href={r.href} label={r.label} />
          ))}
        </div>
      </div>
    </main>
  );
}
