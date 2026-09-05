import type { Metadata } from "next";
import PhotoGallery from "@/components/photo-gallery/PhotoGallery";
import PhotoGalleryForm from "@/components/photo-gallery/PhotoGalleryForm";

export const metadata: Metadata = {
  title: "Photo Gallery | Visual Learning Resources | LBrown Learning",
  description:
    "Explore our photo gallery featuring engaging visual learning materials. Browse educational images designed to inspire and support student success.",
};

const images = [
  { src: "/assets/sales-onboarding-virtual.png", title: "SALES ONBOARDING – VIRTUAL" },
  { src: "/assets/sales-rep-draft-beer-training.png", title: "SALES REP DRAFT BEER TRAINING" },
  { src: "/assets/sales-coaching-supervisor-training.png", title: "SALES COACHING – SUPERVISOR TRAINING" },
  { src: "/assets/train-the-trainer-program.png", title: "TRAIN-THE-TRAINER PROGRAM" },
  { src: "/assets/manager-training.png", title: "MANAGER TRAINING" },
  { src: "/assets/public-speaking-workshop.png", title: "PUBLIC SPEAKING WORKSHOP" },
  { src: "/assets/sales-training.png", title: "SALES TRAINING" },
  { src: "/assets/wine-class.png", title: "WINE CLASS" },
  { src: "/assets/public-speaking-workshop-2.png", title: "PUBLIC SPEAKING WORKSHOP (2)" },
  { src: "/assets/sales-training-2.png", title: "SALES TRAINING (2)" },
  { src: "/assets/atd-conference-presentation.png", title: "ATD CONFERENCE PRESENTATION" },
  { src: "/assets/college-class-presentation.png", title: "COLLEGE CLASS PRESENTATION" },
  { src: "/assets/sales-supervisor-training.png", title: "SALES SUPERVISOR TRAINING" },
  { src: "/assets/speaker-workshop.png", title: "SPEAKER WORKSHOP" },
  { src: "/assets/communication-training.png", title: "COMMUNICATION TRAINING" },
  { src: "/assets/public-speaking-workshop-3.png", title: "PUBLIC SPEAKING WORKSHOP (3)" },
  { src: "/assets/podcast-guest.png", title: "PODCAST GUEST" },
  { src: "/assets/sales-manager-training.png", title: "SALES MANAGER TRAINING" },
  { src: "/assets/local-news-appearances.png", title: "LOCAL NEWS APPEARANCES" },
  { src: "/assets/public-speaking-workshop-4.png", title: "PUBLIC SPEAKING WORKSHOP (4)" },
  { src: "/assets/manager-training-2.png", title: "MANAGER TRAINING (2)" },
  { src: "/assets/sales-supervisor-training-2.png", title: "SALES SUPERVISOR TRAINING (2)" },
  { src: "/assets/corporate-event-emcee.png", title: "CORPORATE EVENT EMCEE" },
  { src: "/assets/sales-training-3.png", title: "SALES TRAINING (3)" },
];

export default function PhotoGalleryPage() {
  return (
    <main className="bg-white">
      <section className="w-[80%] max-w-[1080px] mx-auto py-16">
        <h2 className="text-[30px] text-[#333] font-medium text-center pb-4">
          Photo Gallery
        </h2>
        <p className="text-center text-[#666]">Click on a picture to enlarge</p>
      </section>

      <section className="w-[80%] max-w-[1080px] mx-auto pb-16">
        <PhotoGallery images={images} />
      </section>

      <section className="bg-[#005587] py-16">
        <div className="w-[80%] max-w-[1080px] mx-auto text-center">
          <h3 className="text-white text-2xl font-medium pb-4">
            Want to see this in action for your team?
          </h3>
          <p className="text-white/90 pb-6">
            Let&apos;s talk about how we can bring these training experiences to
            your organization.
          </p>
        </div>
      </section>

      <section className="w-[80%] max-w-[1080px] mx-auto py-16">
        <PhotoGalleryForm />
      </section>
    </main>
  );
}
