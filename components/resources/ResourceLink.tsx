export default function ResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-full text-center bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-4 py-2.5 rounded text-sm transition-colors"
    >
      {label}
    </a>
  );
}
