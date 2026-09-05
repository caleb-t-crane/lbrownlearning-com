import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4"><Link href="/" className="underline">Back to home</Link></p>
    </main>
  );
}
