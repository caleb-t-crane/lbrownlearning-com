import Link from 'next/link';
import QuickContactForm from '@/components/home/QuickContactForm';

export const metadata = {
  title: 'Leadership Training & Coaching | LBrown Learning',
  description:
    'Leadership training, coaching, and professional development programs for individuals, teams, and organizations.',
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <img
          src="/assets/man_and_woman_training_202605070251.jpeg"
          alt=""
          className="w-full h-[400px] md:h-[520px] object-cover"
        />
      </section>

      <section className="bg-white">
        <div className="container mx-auto w-[80%] max-w-[1080px] py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-[#333] leading-tight mb-6">
            Developing Successful Organizations, <br /> One Person at a Time
          </h1>
          <p className="text-[#666] max-w-2xl mx-auto mb-8">
            Welcome to Lloyd Brown Learning &amp; Development. We help organizations grow by
            strengthening communication and leadership skills with engaging professional
            development programs.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-8 py-3 rounded transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Professional Development with a Touch of Fun */}
      <section className="bg-white">
        <div className="container mx-auto w-[80%] max-w-[1080px] py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#333] mb-4">
              Professional Development with a Touch of Fun
            </h2>
            <p className="text-[#666]">
              We believe in an inclusive and engaging learning environment that blends
              instruction, activities, and role-plays to apply new material. Each activity is
              designed to immediately practice the skills needed to solve workplace challenges.
            </p>
          </div>
          <div>
            <img
              src="/assets/lbrown-home-row1.webp"
              alt=""
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>

      {/* Built for Your Team */}
      <section className="bg-white">
        <div className="container mx-auto w-[80%] max-w-[1080px] py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <h2 className="text-2xl md:text-3xl font-medium text-[#333]">
              Professional Development <br /> Built for Your Team
            </h2>
            <Link
              href="/resources"
              className="inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-3 rounded whitespace-nowrap transition-colors"
            >
              Download Our Development Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="mb-4">
                <img
                  src="/assets/image_fx-2026-04-21t171641.072.jpg"
                  alt=""
                  className="w-full h-56 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-medium text-[#333] mb-2">
                Face-to-Face and Virtual Workshops
              </h3>
              <p className="text-[#666]">
                Engage your team with workshops that enhance skills and boost productivity,
                tailored to meet the unique needs of your organization.
              </p>
            </div>
            <div>
              <div className="mb-4">
                <img
                  src="/assets/man_and_woman_training_202605070251.jpeg"
                  alt=""
                  className="w-full h-56 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-medium text-[#333] mb-2">
                One on One Training and Coaching
              </h3>
              <p className="text-[#666]">
                Individual training and coaching increases confidence and effectiveness,
                especially in the areas of communication and public speaking.
              </p>
            </div>
            <div>
              <div className="mb-4">
                <img
                  src="/assets/african-american_man_teaching_em-e2-80-a6_202605070330.jpeg"
                  alt=""
                  className="w-full h-56 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-medium text-[#333] mb-2">
                Curriculum Design and Consulting
              </h3>
              <p className="text-[#666]">
                Create development strategies for your team, align training with competencies
                and job roles, upskill your internal facilitators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Lloyd Brown */}
      <section className="bg-white">
        <div className="container mx-auto w-[80%] max-w-[1080px] py-10 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <img
              src="/assets/screenshot-2026-05-07-at-1.57.30-pm.png"
              alt="Lloyd Brown"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-medium text-[#333] mb-1">Meet Lloyd Brown</h2>
            <h3 className="text-xl font-medium text-[#333] mb-4">Director of Corporate Learning</h3>
            <p className="text-[#666] mb-4">
              Lloyd brings over 25 years of award-winning organizational development, sales,
              management, and HR experience to deliver impactful and dynamic skill development
              programs.
            </p>
            <p className="text-[#666] mb-6">
              Popular programs include: public speaking, leadership, selling skills, manager
              development, change management, and wine education.
            </p>
            <a
              href="/assets/2026-lb-bio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              Lloyd Brown Full Bio
            </a>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="bg-white">
        <div className="container mx-auto w-[80%] max-w-[1080px] py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#333] mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-[#666]">
              We partner with a wide range of diverse organizations. We also realize there
              isn&apos;t a &quot;one size fits all&quot; approach. Our clients consistently praise
              our relevant topics and engaging delivery style. Participants walk away energized
              with skills they can use immediately.
            </p>
          </div>
          <div>
            <img
              src="/assets/our-process.png"
              alt="partners"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>

      {/* CTA / Quick contact form */}
      <section className="bg-[#204ce5]">
        <div className="container mx-auto w-[80%] max-w-[1080px] py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
            Ready to Have a Conversation?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Be prepared to share information about your organization and the results you&apos;d
            like to achieve.
          </p>
          <div className="mb-8">
            <QuickContactForm />
          </div>
          <Link
            href="/contact-us"
            className="inline-block bg-white hover:bg-[#f5f5f5] text-[#204ce5] font-semibold px-8 py-3 rounded transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
