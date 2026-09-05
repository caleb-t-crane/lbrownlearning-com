'use client';

import { useState, FormEvent } from "react";

export default function ProductKnowledgeInquiryForm() {
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

  return (
    <div className="w-[80%] max-w-[600px] mx-auto py-16 text-center">
      <h3 className="text-2xl font-medium text-[#112337] pb-2">
        Have Questions About Our Product Knowledge Programs?
      </h3>
      <p className="text-[#686e77] pb-6">
        Send us your name and email and we&apos;ll be in touch to talk through the right program
        for your team.
      </p>

      {status === "sent" ? (
        <p className="text-lg font-semibold text-[#204ce5]">
          Thanks! Your message has been sent. We&apos;ll be in touch soon.
        </p>
      ) : (
        <form
          name="product-knowledge-inquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left"
        >
          <input type="hidden" name="form-name" value="product-knowledge-inquiry" />
          <p hidden>
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <label className="text-sm font-semibold text-[#112337]">
            Name
            <input
              type="text"
              name="input_1.3"
              required
              className="mt-1 w-full rounded-sm border border-[#ccc] px-3 py-2 text-[#666]"
            />
          </label>

          <label className="text-sm font-semibold text-[#112337]">
            Email
            <input
              type="email"
              name="input_3"
              required
              className="mt-1 w-full rounded-sm border border-[#ccc] px-3 py-2 text-[#666]"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-block self-start rounded-sm bg-[#204ce5] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#001ab3] disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Please try again or email Lbrown@lbrownlearning.com directly.
            </p>
          )}
        </form>
      )}

      {/* Preserved third-party embeds */}
      <div style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0 }}>
        <iframe title="blank-frame" src="about:blank" />
        <iframe
          title="recaptcha"
          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcfpCctAAAAAOKymTsTOG-emU3-MHjF7i2JYGks&co=aHR0cHM6Ly9sYnJvd25sZWFybmluZy5jb206NDQz&hl=en&v=8x-4t2pegToiW8KmThtO4AQt&size=invisible&anchor-ms=20000&execute-ms=30000&cb=mz65u2w3a0np"
        />
      </div>
    </div>
  );
}
