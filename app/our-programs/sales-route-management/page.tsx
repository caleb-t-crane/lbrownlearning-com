import Link from 'next/link';
import SalesProgramsSection from '@/components/our-programs/SalesProgramsSection';
import DiscoveryForm from '@/components/our-programs/DiscoveryForm';
import CallNowButton from '@/components/CallNowButton';

export const metadata = {
  title: 'Sales Route Management Training Program | LBrown Learning',
  description:
    'Master sales route management with our expert training program. Learn to optimize territories, boost field sales productivity, and drive revenue growth. Enroll today!',
};

export default function SalesRouteManagementPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0a4a7a] px-6 py-16 text-center text-white">
        <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-semibold md:text-4xl">
          Sales &amp; Route Management
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed">
          Our sales and route management programs put salespeople on the path to success and teach them to run
          effective sales territories.
        </p>
        <DiscoveryForm />
      </section>

      {/* Hero image with wave divider */}
      <div className="relative">
        <img
          src="/assets/man_and_woman_training_202605070251.jpeg"
          alt=""
          className="h-[220px] w-full object-cover sm:h-[320px] md:h-[480px]"
        />
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 1280 60"
            preserveAspectRatio="none"
            className="h-[40px] w-full text-white md:h-[60px]"
          >
            <path d="M0,60 L1280,20 L1280,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Program descriptions */}
      <section className="mx-auto max-w-[1080px] px-6 py-16">
        <h2 className="mb-4 text-center text-3xl font-semibold text-[#333]">Sales Program Descriptions</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-[#666]">
          Click each box to learn more about the program including an overview, the recommended audience, duration,
          etc.
        </p>

        <SalesProgramsSection />
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f5] px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold text-[#333]">Ready to Strengthen Your Internal Training?</h2>
          <p className="mb-8 text-[#666]">
            Whether you need customized training materials built from scratch or strategic fractional L&amp;D
            consulting to revamp your current offerings, we are here to help. Let&apos;s discuss your organization&apos;s
            unique challenges and goals.
          </p>
          <a
            href="/assets/training-program-bundles-updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-[#204ce5] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#001ab3]"
          >
            Review Training Bundles
          </a>
        </div>
      </section>

      <CallNowButton />
    </main>
  );
}
