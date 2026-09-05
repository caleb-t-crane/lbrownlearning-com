import DiscoveryCallButton from '@/components/working-with-us/DiscoveryCallButton';
import CallNowButton from '@/components/CallNowButton';

export const metadata = {
  title: "Working With Us | [Your Service] Partnership – L Brown Learning",
  description:
    "Discover what it's like working with L Brown Learning. Partner with us for [your key service] tailored to your goals. Get in touch today.",
};

export default function WorkingWithUsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div
          className="h-[400px] w-full bg-cover bg-center md:h-[540px]"
          style={{ backgroundImage: "url(/assets/man_and_woman_training_202605070251.jpeg)" }}
        />
      </section>

      {/* Building the Right Solution - intro */}
      <section className="mx-auto w-[80%] max-w-[1080px] py-16 text-center">
        <h1 className="text-3xl font-medium text-[#333]">
          Building the Right Solution
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#666]">
          To deliver the most effective solution, we begin with a needs
          analysis. <br />
          You can help us move quickly by preparing to discuss key questions
          about your orgranization.
        </p>
        <div className="mt-6">
          <DiscoveryCallButton
            label="Begin Discovery Phase"
            className="inline-block rounded bg-[#204ce5] px-8 py-3 font-medium text-white hover:bg-[#001ab3]"
          />
        </div>
      </section>

      {/* Our Process image + PDF link */}
      <section className="mx-auto w-[80%] max-w-[1080px] pb-16">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <img
              width={730}
              height={499}
              src="/assets/our-process.png"
              alt=""
              title="Our Process"
              className="w-full max-w-[500px]"
            />
          </div>
          <div>
            <a
              href="/assets/what-well-need-to-know.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-[#204ce5] px-8 py-3 font-medium text-white hover:bg-[#001ab3]"
            >
              Here&apos;s What we&apos;ll Need to Know
            </a>
          </div>
        </div>
      </section>

      {/* Building the Right Solution - detail */}
      <section className="mx-auto w-[80%] max-w-[1080px] py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-medium text-[#333]">
              Building the Right Solution
            </h2>
            <p className="mt-4 text-[#666]">
              To deliver the most effective solution, every engagement begins
              with a comprehensive needs analysis. To accelerate this
              process, we ask that you come to our discovery call prepared to
              discuss:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-[#666]">
              <li>
                <strong className="text-[#333]">Your Objectives:</strong>{' '}
                Your organization&apos;s top goals and current challenges.
              </li>
              <li>
                <strong className="text-[#333]">Your Team:</strong> Details
                about the participating audience, including their roles and
                departments.
              </li>
              <li>
                <strong className="text-[#333]">Your Scope:</strong> Your
                expected timeline and whether this is a one-time event or a
                long-term engagement.
              </li>
              <li>
                <strong className="text-[#333]">Your ROI:</strong> How
                success and results will be measured for this initiative.
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <img
              width={1280}
              height={896}
              src="/assets/image_fx-2026-04-21t171641.072.jpg"
              alt=""
              title="Training"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Custom Pricing */}
      <section className="mx-auto w-[80%] max-w-[1080px] py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <img
              width={1280}
              height={720}
              src="/assets/screenshot-2026-05-07-at-2.10.17-pm.png"
              alt=""
              title="Pricing"
              className="w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-medium text-[#333]">
              Custom Pricing
            </h2>
            <p className="mt-4 text-[#666]">
              All programs are customized to align with your goals. Financial
              investment of each program varies based on scope, format, and
              factors listed below. We are happy to provide a clear proposal
              following a brief discovery conversation to ensure the solution
              aligns with your objectives and budget.
            </p>
            <p className="mt-4 font-bold text-[#333]">
              Factors that impact pricing include:
            </p>
            <ul className="mt-2 grid list-disc grid-cols-1 gap-x-6 gap-y-1 pl-6 text-[#666] sm:grid-cols-2">
              <li>Audience size</li>
              <li>Length of the program</li>
              <li>Travel costs</li>
              <li>Class materials</li>
              <li>Participant materials</li>
              <li>Facility rental</li>
              <li>Delivery method</li>
              <li>Amount of customization</li>
              <li>Document creation &amp; time to develop</li>
              <li>Number of facilitators</li>
              <li>Product samples</li>
              <li>Evaluation &amp; Implementation measures</li>
              <li>Number of on-site visits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ready to Elevate Your Team */}
      <section
        className="relative bg-cover bg-center py-24 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,35,55,0.65), rgba(17,35,55,0.65)), url(/assets/lbrown-home-row1.webp)",
        }}
      >
        <div className="mx-auto w-[80%] max-w-[1080px]">
          <h2 className="text-3xl font-medium text-white">
            Ready to Elevate Your Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            If you want to invest in developing your people, the first step
            is simple. Reach out to start a conversation about your
            organization&apos;s unique challenges and goals.
          </p>
          <div className="mt-6">
            <DiscoveryCallButton
              label="Ready for a Discovery Call"
              className="inline-block rounded bg-white px-8 py-3 font-medium text-[#204ce5] hover:bg-[#f5f5f5]"
            />
          </div>
        </div>
      </section>

      <CallNowButton />

      {/* invisible recaptcha iframe kept as in original */}
      <iframe
        title="recaptcha"
        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcfpCctAAAAAOKymTsTOG-emU3-MHjF7i2JYGks&co=aHR0cHM6Ly9sYnJvd25sZWFybmluZy5jb206NDQz&hl=en&v=8x-4t2pegToiW8KmThtO4AQt&size=invisible&anchor-ms=20000&execute-ms=30000&cb=3cs9cm237q21"
        style={{ display: 'none' }}
      />
    </main>
  );
}
