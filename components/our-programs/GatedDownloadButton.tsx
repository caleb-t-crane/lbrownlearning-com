'use client';

import { useState } from "react";

const PDF_HREF = "/assets/training-program-bundles-updated.pdf";

export default function GatedDownloadButton() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
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
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-block bg-[#2ea3f2] hover:bg-[#204ce5] text-white font-medium px-6 py-3 rounded-sm transition-colors"
      >
        Review Training Bundles
      </button>

      <div
        id="training-bundles-modal"
        hidden={!open}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      >
        <div className="bg-white rounded-sm max-w-md w-full p-8 relative text-left">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-[#666] hover:text-[#333] text-xl leading-none"
          >
            &times;
          </button>

          {status === "sent" ? (
            <div>
              <h3 className="text-[22px] font-medium text-[#333] pb-4">
                Thank you!
              </h3>
              <p className="text-[#666] pb-4">
                Please click below to download the Training Program Bundles.
              </p>
              <a
                href={PDF_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2ea3f2] hover:bg-[#204ce5] text-white font-medium px-6 py-3 rounded-sm transition-colors"
              >
                Download PDF
              </a>
            </div>
          ) : (
            <>
              <h3 className="text-[22px] font-medium text-[#333] pb-2">
                Get the Training Program Bundles
              </h3>
              <p className="text-[#666] pb-4">
                Enter your name and email to access the bundle guide.
              </p>
              <form
                name="training-bundles-download"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="training-bundles-download"
                />
                <p hidden>
                  <label>
                    Do not fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor="input_1.3"
                    className="block text-[13px] text-[#333] pb-1"
                  >
                    Name
                  </label>
                  <input
                    id="input_1.3"
                    name="input_1.3"
                    type="text"
                    required
                    className="w-full border border-[#ccc] rounded-sm px-3 py-2 text-[14px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="input_3"
                    className="block text-[13px] text-[#333] pb-1"
                  >
                    Email
                  </label>
                  <input
                    id="input_3"
                    name="input_3"
                    type="email"
                    required
                    className="w-full border border-[#ccc] rounded-sm px-3 py-2 text-[14px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-block bg-[#2ea3f2] hover:bg-[#204ce5] text-white font-medium px-6 py-3 rounded-sm transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting..." : "Submit"}
                </button>

                {status === "error" && (
                  <p className="text-red-600 text-[13px]">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
