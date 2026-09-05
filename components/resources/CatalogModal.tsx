'use client';

import { useState } from 'react';

export default function CatalogModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    try {
      const data = new FormData(e.currentTarget);
      const body = new URLSearchParams();
      data.forEach((v, k) => body.append(k, String(v)));
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-3 rounded transition-colors"
      >
        Download PDF
      </button>

      <div
        id="catalog-download-form"
        hidden={!open}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      >
        <div className="relative w-full max-w-md rounded bg-white p-6 shadow-lg">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-3 top-3 text-2xl leading-none text-[#112337]"
          >
            &times;
          </button>

          {status !== 'sent' ? (
            <form
              name="catalog-download-form"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value="catalog-download-form" />
              <p hidden>
                <label>
                  Do not fill this out: <input name="bot-field" />
                </label>
              </p>
              <h3 className="text-lg font-semibold text-[#112337]">Get the 2026 Professional Development Catalog</h3>
              <label className="flex flex-col text-sm text-[#112337]">
                Name (Required) First
                <input
                  type="text"
                  name="input_1.3"
                  required
                  className="mt-1 border border-[#ccc] rounded px-3 py-2"
                />
              </label>
              <label className="flex flex-col text-sm text-[#112337]">
                Email (Required)
                <input
                  type="email"
                  name="input_3"
                  required
                  className="mt-1 border border-[#ccc] rounded px-3 py-2"
                />
              </label>
              <div className="hidden">
                <iframe title="recaptcha" src="about:blank" />
                <iframe
                  title="recaptcha-anchor"
                  src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcfpCctAAAAAOKymTsTOG-emU3-MHjF7i2JYGks&co=aHR0cHM6Ly9sYnJvd25sZWFybmluZy5jb206NDQz&hl=en&v=8x-4t2pegToiW8KmThtO4AQt&size=invisible&anchor-ms=20000&execute-ms=30000&cb=t8x7yobuseze"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Submit
              </button>
              {status === 'error' && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          ) : (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-[#112337]">Thank you!</h3>
              <p className="text-[#666]">Your download is ready below.</p>
              <a
                href="/assets/2026-professional-development-catalog-lb-ld.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-3 rounded transition-colors text-center"
              >
                Download the Catalog PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
