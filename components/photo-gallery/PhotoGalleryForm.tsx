"use client";

import { useState, FormEvent } from "react";

export default function PhotoGalleryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

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
      <div className="text-center py-8">
        <h3 className="text-[22px] text-[#333] font-medium pb-4">
          Thank you!
        </h3>
        <p className="text-[#666]">
          We&apos;ve received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name="photo-gallery"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value="photo-gallery" />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="input_1_3" className="block text-[#333] mb-1">
          Name
        </label>
        <input
          id="input_1_3"
          name="input_1.3"
          type="text"
          required
          className="w-full border border-[#ccc] px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="input_3" className="block text-[#333] mb-1">
          Email
        </label>
        <input
          id="input_3"
          name="input_3"
          type="email"
          required
          className="w-full border border-[#ccc] px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#204ce5] hover:bg-[#001ab3] text-white font-medium px-6 py-3 self-start"
      >
        {status === "sending" ? "Submitting..." : "Submit"}
      </button>

      {status === "error" && (
        <p className="text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
