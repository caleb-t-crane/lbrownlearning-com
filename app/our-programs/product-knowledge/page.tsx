import Link from "next/link";
import ProductKnowledgeSection from "@/components/our-programs/ProductKnowledgeSection";
import ProductKnowledgeInquiryForm from "@/components/our-programs/ProductKnowledgeInquiryForm";

export const metadata = {
  title: "Product Knowledge Training Programs | LBrown Learning",
  description:
    "Boost sales performance with expert product knowledge training. LBrown Learning helps your team master your products and close more deals. Learn more today!",
};

export default function ProductKnowledgePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#112337]">
        <div
          className="relative h-[280px] w-full sm:h-[380px] md:h-[450px]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
          }}
        >
          <img
            src="/assets/image_fx-2026-04-21t171641.072.jpg"
            srcSet="/assets/image_fx-2026-04-21t171641.072-480x336.jpg 480w, /assets/image_fx-2026-04-21t171641.072-980x686.jpg 980w, /assets/image_fx-2026-04-21t171641.072.jpg 1280w"
            sizes="100vw"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Title / intro */}
      <section className="bg-white py-14">
        <div className="w-[80%] max-w-[1080px] mx-auto text-center">
          <h1 className="text-3xl md:text-[42px] font-medium text-[#112337] pb-4">
            Product Knowledge
          </h1>
          <p className="mx-auto max-w-3xl text-[#686e77] pb-6">
            Increase your knowledge and confidence when working with the world&apos;s most
            popular beverages. Whether you&apos;re selling, hosting clients, or attending formal
            dinners, expert product knowledge will help you navigate high-level social situations
            with sophistication.
          </p>
          <Link
            href="/contact-us"
            className="inline-block rounded-sm bg-[#204ce5] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#001ab3]"
          >
            Start a Discovery Conversation
          </Link>
        </div>
      </section>

      {/* Program cards + modals */}
      <ProductKnowledgeSection />

      {/* Quick inquiry form (Netlify form 1) */}
      <ProductKnowledgeInquiryForm />

      {/* CTA with background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/man_and_woman_training_202605070251.jpeg"
            srcSet="/assets/man_and_woman_training_202605070251-480x358.jpeg 480w, /assets/man_and_woman_training_202605070251-980x732.jpeg 980w, /assets/man_and_woman_training_202605070251.jpeg 1280w"
            sizes="100vw"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative w-[80%] max-w-[1080px] mx-auto py-24 text-center">
          <h2 className="text-2xl md:text-[36px] font-medium text-white pb-4">
            Ready to Strengthen Your Internal Training?
          </h2>
          <p className="mx-auto max-w-2xl text-white/90 pb-8">
            Whether you need customized training materials built from scratch or strategic
            fractional L&amp;D consulting to revamp your current offerings, we are here to help.
            Let&apos;s discuss your organization&apos;s unique challenges and goals.
          </p>
          <a
            href="/assets/training-program-bundles-updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-[#204ce5] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#001ab3]"
          >
            Review Training Bundles
          </a>
        </div>
      </section>
    </main>
  );
}
