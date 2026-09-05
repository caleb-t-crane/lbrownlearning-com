'use client';

import { useState, FormEvent } from "react";

export default function PersonalProductivityInquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    data.forEach((v, k) => body.append(k, String(v)));
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-center text-[#333] py-6">
        Thank you! We&apos;ve received your request and will be in touch soon.
      </p>
    );
  }

  return (
    <form
      name="personal-productivity-inquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="personal-productivity-inquiry" />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="input_1.3" className="block text-sm font-medium text-[#333] mb-1">
          Name
        </label>
        <input
          id="input_1.3"
          name="input_1.3"
          type="text"
          required
          className="w-full border border-[#ccc] rounded px-3 py-2 text-[#333] focus:outline-none focus:border-[#2ea3f2]"
        />
      </div>

      <div>
        <label htmlFor="input_3" className="block text-sm font-medium text-[#333] mb-1">
          Email
        </label>
        <input
          id="input_3"
          name="input_3"
          type="email"
          required
          className="w-full border border-[#ccc] rounded px-3 py-2 text-[#333] focus:outline-none focus:border-[#2ea3f2]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#e07b2e] hover:bg-[#c9691f] disabled:opacity-60 text-white font-medium px-6 py-3 rounded transition-colors"
      >
        {status === "sending" ? "Submitting..." : "Submit"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or call (317) 437-5475.
        </p>
      )}
    </form>
  );
}
