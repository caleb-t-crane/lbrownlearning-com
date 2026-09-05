import Link from 'next/link';
import BeliefsDownloadModal from '@/components/about/BeliefsDownloadModal';
import CallNowButton from '@/components/about/CallNowButton';

export const metadata = {
  title: 'About Lloyd Brown | Mission & Values',
  description:
    'Discover Lloyd Brown experience spanning 25+ years and our mission to build stronger teams.',
};

const companies = [
  'MOLSON',
  'CEDIA',
  'MB',
  'Constellation',
  'TOYOTA',
  'heartland',
  'YVH',
  'sierra nevada',
  'specialized staffing solutions',
  'deceresente family business',
  'yuengling',
  'sigma-tau',
  'DIAGEO',
  'reyes-academy',
  'heineken USA',
  'Raddison',
  'REYES',
  'IMPERIAL',
];

const values = [
  {
    title: 'Service',
    text: 'We are dedicated to providing excellent service and clear, responsive communication to every client partner.',
  },
  {
    title: 'Quality',
    text: 'We strive to deliver best-in-class products, customized programs, and facilitation services.',
  },
  {
    title: 'Wisdom',
    text: 'We believe in sharing relevant knowledge and practical insights gained from decades of real-world experience.',
  },
  {
    title: 'Humor',
    text: 'We create an engaging training environment where participants feel comfortable, confident, and ready to grow.',
  },
];

const beliefs = [
  'Face-to-face training (ILT) is THE most effective delivery method',
  'Everyone should have an opportunity to learn and grow',
  'Learning can take place in many types of locations',
  'Learners are motivated when they can apply new skills on the job',
  'Devices can be used as "third hands" in a training environment',
  'Learning is an ongoing, continuous process that never stops',
  'Change is a process that flows from the inside-out',
];

export default function AboutPage() {
  return (
    <main className="text-[#666]">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[460px] md:h-[550px] w-full overflow-hidden">
          <img
            src="/assets/man_and_woman_training_202605070251.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#112337]/50" />
          <div className="relative z-10 max-w-[1080px] mx-auto h-full flex items-center px-6">
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-medium leading-tight mb-4">
                Mission: <br />
                To Develop Successful Organizations, <br />
                One Person at a Time
              </h1>
              <p className="text-white/90 max-w-2xl">
                Effective individuals create successful teams, successful teams create
                productive departments, productive departments result in world-class
                organizations…everything starts with the individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-6">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
            <img
              src="/assets/african-american_man_teaching_em-e2-80-a6_202605070330.jpeg"
              alt=""
              className="w-full h-auto rounded"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-medium text-[#333] mb-4">Vision:</h2>
            <p>
              Organizations winning with effective individual contributors, prepared
              emerging leaders, and inspired people leaders due to the work we&apos;ve
              performed. 1. Organizations are successful when they perform well at all
              levels. 2. Developing an organization&apos;s &quot;bench&quot; (next level
              leaders) should be a high priority to achieve their long-term succession
              strategy. 3. Managers who lead people must learn to maximize their
              team&apos;s performance. This involves being a great manager and leader in
              the same role.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="text-3xl font-medium text-[#333] mb-4 text-center md:text-left">
            Values
          </h2>
          <div className="mb-10 max-w-3xl">
            <p className="pb-2">
              We strive for effectiveness and productivity when delivering our programs.
            </p>
            <p className="pb-2">
              To achieve these outcomes we utilize our values of service, quality,
              wisdom, and sometimes humor.
            </p>
            <p className="pb-2">
              Effectiveness – Consistently achieving meaningful results.
            </p>
            <p>Productivity – Using time, talent, and resources for desired outcomes.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <h4 className="text-lg font-semibold text-[#333] mb-2">{v.title}</h4>
                <p className="text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16 px-6">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="text-3xl font-medium text-[#333] mb-10 text-center">
            Working With Companies Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {companies.map((c) => (
              <div
                key={c}
                className="h-16 flex items-center justify-center text-center text-xs font-semibold text-[#607382] uppercase border border-[#eee] rounded"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs & Learning Principles */}
      <section className="py-16 px-6 bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-medium text-[#333] mb-4">
              Beliefs &amp; Learning Principles
            </h2>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              {beliefs.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <BeliefsDownloadModal />
          </div>
          <div className="md:col-span-2">
            <img
              src="/assets/man_and_woman_training_202605070251-980x732.jpeg"
              alt="Man teaching employees workshop"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-[1080px] mx-auto text-center">
          <h2 className="text-3xl font-medium text-[#333] mb-4">
            Ready to Have a Conversation?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Whether you need customized workshops, internal curriculum design, or
            ongoing consulting, we are here to help your team communicate better, lead
            stronger, and perform at their best.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <CallNowButton />
    </main>
  );
}
