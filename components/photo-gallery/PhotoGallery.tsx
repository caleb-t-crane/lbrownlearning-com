"use client";

import { useState } from "react";

type GalleryImage = {
  src: string;
  title: string;
};

export default function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img) => (
          <div key={img.src} className="text-center">
            <button
              type="button"
              onClick={() => setActive(img)}
              className="block w-full"
              aria-label={`Enlarge ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.title}
                width={400}
                height={284}
                className="w-full h-auto object-cover shadow-[6px_6px_9px_rgba(0,0,0,0.2)]"
              />
            </button>
            <h3 className="text-[22px] text-[#333] font-medium pt-4">
              {img.title}
            </h3>
          </div>
        ))}
      </div>

      <div
        id="gallery-lightbox"
        hidden={!active}
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        onClick={() => setActive(null)}
      >
        {active && (
          <div className="max-w-3xl w-full text-center">
            <img
              src={active.src}
              alt={active.title}
              className="w-full h-auto mx-auto"
            />
            <p className="text-white mt-4">{active.title}</p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="mt-4 px-4 py-2 bg-white text-[#112337] font-medium"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}
