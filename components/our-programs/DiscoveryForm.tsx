'use client';

import { useState } from 'react';

export default function DiscoveryForm() {
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
        className="inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-8 py-3 rounded transition-colors"
      >
        Start a Discovery Conversation
      </button>

      <div
        id="discovery-conversation-modal"
        hidden={!open}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      >
        <div className="relative w-full max-w-md rounded bg-white p-8 shadow-xl">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-3 top-3 text-2xl leading-none text-[#585e6a] hover:text-[#112337]"
          >
            &times;
          </button>

          {status === 'sent' ? (
            <div className="text-center py-6">
              <h3 className="text-xl font-semibold text-[#112337] mb-2">Thank You!</h3>
              <p className="text-[#585e6a]">
                Your message has been received. We&apos;ll be in touch soon to schedule your discovery conversation.
              </p>
            </div>
          ) : (
            <form
              name="discovery-conversation"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value="discovery-conversation" />
              <p hidden>
                <label>
                  Do not fill this out: <input name="bot-field" />
                </label>
              </p>

              <h3 className="text-xl font-semibold text-[#112337] mb-1">Start a Discovery Conversation</h3>

              <label className="flex flex-col gap-1 text-sm font-medium text-[#112337]">
                Name
                <input
                  type="text"
                  name="input_1.3"
                  required
                  className="rounded border border-[#ccc] px-3 py-2 text-[#112337] focus:border-[#2ea3f2] focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-medium text-[#112337]">
                Email
                <input
                  type="email"
                  name="input_3"
                  required
                  className="rounded border border-[#ccc] px-3 py-2 text-[#112337] focus:border-[#2ea3f2] focus:outline-none"
                />
              </label>

              <div className="my-1">
                <iframe title="recaptcha-placeholder" src="about:blank" className="hidden" />
                <iframe
                  title="reCAPTCHA"
                  src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcfpCctAAAAAOKymTsTOG-emU3-MHjF7i2JYGks&co=aHR0cHM6Ly9sYnJvd25sZWFybmluZy5jb206NDQz&hl=en&v=8x-4t2pegToiW8KmThtO4AQt&size=invisible&anchor-ms=20000&execute-ms=30000&cb=l2h0srwwat8e"
                  className="w-[304px] max-w-full h-[78px] border-0"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 inline-block bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-3 rounded transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
