'use client';

export default function CallNowButton() {
  return (
    <a
      href="tel:3174375475"
      id="callnowbutton"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-3 bg-[#2ea3f2] hover:bg-[#001ab3] text-white rounded-full pl-3 pr-4 py-3 shadow-lg transition-colors"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#204ce5]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02z" />
        </svg>
      </span>
      <span className="text-sm font-semibold">Call Now</span>
    </a>
  );
}
