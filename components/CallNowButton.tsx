'use client';

export default function CallNowButton() {
  return (
    <a
      href="tel:3174375475"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#2ea3f2] text-white shadow-lg hover:bg-[#204ce5]"
      title="Call Now"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02z" />
      </svg>
    </a>
  );
}
