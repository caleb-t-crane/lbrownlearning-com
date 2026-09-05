'use client';

import { useState } from 'react';

export default function BeliefsDownloadModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    data.forEach((v, k) => body.append(k, String(v)));
    try {
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
        Read More
      </button>

      <div
        id="beliefs-download-modal"
        hidden={!open}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      >
        <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-[#112337] text-xl leading-none"
          >
            &times;
          </button>

          {status === 'sent' ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold text-[#112337] mb-4">Thank You!</h3>
              <p className="mb-6 text-[#666]">
                Your download is ready below.
              </p>
              <a
                href="/assets/lb-ld-beliefs-learning-principles.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Download Beliefs &amp; Learning Principles PDF
              </a>
            </div>
          ) : (
            <form
              name="about-beliefs-download"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="about-beliefs-download" />
              <p hidden>
                <label>
                  Do not fill this out: <input name="bot-field" />
                </label>
              </p>
              <h3 className="text-xl font-semibold text-[#112337] mb-2">
                Get the Beliefs &amp; Learning Principles PDF
              </h3>
              <p className="text-sm text-[#666] mb-4">
                Enter your name and email to access the full document.
              </p>
              <div>
                <label htmlFor="input_1_3" className="block text-sm font-medium text-[#112337] mb-1">
                  Name
                </label>
                <input
                  id="input_1_3"
                  type="text"
                  name="input_1.3"
                  required
                  className="w-full border border-[#ccc] rounded px-3 py-2 focus:outline-none focus:border-[#2ea3f2]"
                />
              </div>
              <div>
                <label htmlFor="input_3" className="block text-sm font-medium text-[#112337] mb-1">
                  Email
                </label>
                <input
                  id="input_3"
                  type="email"
                  name="input_3"
                  required
                  className="w-full border border-[#ccc] rounded px-3 py-2 focus:outline-none focus:border-[#2ea3f2]"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-3 rounded transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Submitting…' : 'Submit'}
              </button>
              {status === 'error' && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
              <iframe title="recaptcha" src="about:blank" className="hidden" />
              <iframe
                title="recaptcha-widget"
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcfpCctAAAAAOKymTsTOG-emU3-MHjF7i2JYGks&co=aHR0cHM6Ly9sYnJvd25sZWFybmluZy5jb206NDQz&hl=en&v=8x-4t2pegToiW8KmThtO4AQt&size=invisible&anchor-ms=20000&execute-ms=30000&cb=2v49blrlitmx"
                className="hidden"
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
}
