import type { Metadata } from "next";
import PersonalProductivityPrograms from "@/components/our-programs/PersonalProductivityPrograms";
import PersonalProductivityInquiryForm from "@/components/our-programs/PersonalProductivityInquiryForm";

export const metadata: Metadata = {
  title: "Personal Productivity Training Program | LBrown Learning",
  description:
    "Boost your efficiency with our Personal Productivity program. Learn proven time management & focus strategies to achieve more. Enroll today!",
};

export default function PersonalProductivityPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-[#0b4a86] text-white">
        <div className="w-[80%] max-w-[1080px] mx-auto py-16 md:py-20 text-left">
          <h1 className="text-white text-3xl md:text-4xl font-medium pb-4">
            Personal Productivity
          </h1>
          <p className="max-w-2xl text-white/90 mb-6">
            Prepare your emerging leaders and enable current managers to bring out the best in
            their people.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#e07b2e] hover:bg-[#c9691f] text-white font-medium px-6 py-3 rounded transition-colors"
          >
            Start a Discovery Conversation
          </a>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/assets/lbrown-home-row1.webp"
          alt=""
          className="w-full h-[420px] md:h-[460px] object-cover"
        />
        <img
          src="/assets/logo-b_lloyd-brown-480x135.png"
          alt="Lloyd Brown Learning &amp; Development"
          className="absolute bottom-6 right-6 w-40 md:w-56 opacity-70 grayscale brightness-200"
        />
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,40 L1280,10 L1280,40 Z" fill="currentColor" />
        </svg>
      </section>

      {/* PROGRAM DESCRIPTIONS */}
      <section className="w-[80%] max-w-[1080px] mx-auto py-16">
        <h2 className="text-center text-[#333] text-2xl md:text-3xl font-medium pb-4">
          Personal Productivity Program Descriptions
        </h2>
        <p className="text-center text-[#666] max-w-3xl mx-auto mb-10">
          Click each box to learn more about the program including an overview, the recommended
          audience, duration, etc.
        </p>

        <PersonalProductivityPrograms />
      </section>

      {/* CTA / REQUEST INFO */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,74,134,0.75), rgba(11,74,134,0.75)), url(/assets/man_and_woman_training_202605070251.jpeg)",
        }}
      >
        <div className="w-[80%] max-w-[1080px] mx-auto py-16 md:py-20 text-center text-white">
          <h2 className="text-white text-2xl md:text-3xl font-medium pb-4">
            Ready to Strengthen Your Internal Training?
          </h2>
          <p className="max-w-2xl mx-auto text-white/90 mb-8">
            Whether you need customized training materials built from scratch or strategic
            fractional L&amp;D consulting to revamp your current offerings, we are here to help.
            Let&apos;s discuss your organization&apos;s unique challenges and goals.
          </p>
          <a
            href="/assets/training-program-bundles-updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#e07b2e] hover:bg-[#c9691f] text-white font-medium px-6 py-3 rounded transition-colors mb-12"
          >
            Review Training Bundles
          </a>

          <div className="max-w-md mx-auto bg-white rounded-lg p-6 text-left text-[#333]">
            <h3 className="text-xl font-medium mb-4 text-center">Request More Information</h3>
            <PersonalProductivityInquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
