import GatedDownloadButton from "@/components/our-programs/GatedDownloadButton";

export const metadata = {
  title: "Our Learning Programs | Personalized Education | LBrown Learning",
  description:
    "Explore LBrown Learning's programs designed to help students grow and succeed. Discover personalized learning solutions tailored to your goals. Enroll today!",
};

const programs = [
  {
    href: "/our-programs/sales-route-management",
    img: "/assets/sales-route-management.png",
    title: "Sales & Route Management",
    desc: "Equip your salesforce with the professional selling skills needed to excel quickly and run effective territories.",
  },
  {
    href: "/our-programs/personal-productivity",
    img: "/assets/sales.png",
    title: "Personal Productivity",
    desc: "Empower your team to perform at their best with training on communication, public speaking, change management, or conflict resolution.",
  },
  {
    href: "/our-programs/leadership-management",
    img: "/assets/leadership-and-management.png",
    title: "Leadership & Management",
    desc: "Transform managers into performance coaches and inspiring leaders. These skills are critical to establish and maintain effective cultures.",
  },
  {
    href: "/our-programs/product-knowledge",
    img: "/assets/product.png",
    title: "Product Knowledge",
    desc: "Prepare for certifications or just have fun with your team with our product knowledge courses. These are useful in business and personal social settings.",
  },
];

export default function OurProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <div className="relative">
        <div className="h-[120px] bg-[#0b5394]" />
        <div className="relative">
          <img
            src="/assets/man_and_woman_training_202605070251.jpeg"
            alt=""
            className="w-full h-[440px] object-cover"
          />
          <svg
            className="absolute -bottom-1 left-0 w-full text-white"
            viewBox="0 0 1280 40"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C320,0 960,0 1280,40 L1280,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto w-[80%] max-w-[1080px] py-16 text-left">
        <h1 className="text-[30px] font-medium text-[#333] pb-3">
          Professional Development Programs
        </h1>
        <p className="pb-8 text-[#666] leading-[1.7em]">
          Explore Lloyd Brown Learning &amp; Development&apos;s expert-led corporate
          training programs. We specialize in sales training, leadership
          development, personal productivity, communication, and product
          knowledge.
        </p>

        <h2 className="text-[22px] font-medium text-[#333] pb-2">
          Programs by Category
        </h2>
        <p className="pb-8 text-[#666] leading-[1.7em]">
          Click on the boxes below to explore training options in that category.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="block border border-[#2ea3f2] rounded-sm shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <img src={p.img} alt="" className="w-full h-auto" />
              <div className="p-4">
                <h4 className="text-[16px] font-medium text-[#2ea3f2] pb-2">
                  {p.title}
                </h4>
                <p className="text-[13px] text-[#666] leading-[1.6em] pb-0">
                  {p.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bundles */}
      <div className="relative">
        <img
          src="/assets/image_fx-2026-04-21t171641.072.jpg"
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto w-[80%] max-w-[1080px] text-white">
            <h2 className="text-[36px] font-medium pb-3 text-white">
              Training Program Bundles
            </h2>
            <p className="pb-6 leading-[1.7em] max-w-2xl">
              Select any of these packages for proven results and logical
              content flows.
              <br />
              Each bundle contains complementary skill development modules for
              behavior change.
            </p>
            <GatedDownloadButton />
          </div>
        </div>
      </div>

      <div className="h-16 bg-[#0b5394]" />
    </main>
  );
}
