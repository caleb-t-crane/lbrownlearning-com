'use client';

import { useState } from 'react';

export default function DiscoveryCallModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );

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
    <div
      id="discovery-call-modal"
      hidden={!open}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    >
      <div className="relative w-full max-w-md rounded bg-white p-8 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl leading-none text-[#666] hover:text-[#112337]"
        >
          &times;
        </button>
        <h2 className="mb-4 pb-0 text-2xl font-medium text-[#112337]">
          Start a Discovery Call
        </h2>
        {status === 'sent' ? (
          <p className="text-[#666]">
            Thanks for reaching out! We&apos;ll be in touch shortly to
            schedule your discovery call.
          </p>
        ) : (
          <form
            name="discovery-call"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="discovery-call" />
            <p hidden>
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label
                htmlFor="input_1.3"
                className="mb-1 block text-sm font-medium text-[#112337]"
              >
                Name
              </label>
              <input
                id="input_1.3"
                name="input_1.3"
                type="text"
                required
                className="w-full rounded border border-[#ccc] px-3 py-2 text-[#666] focus:border-[#2ea3f2] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="input_3"
                className="mb-1 block text-sm font-medium text-[#112337]"
              >
                Email
              </label>
              <input
                id="input_3"
                name="input_3"
                type="email"
                required
                className="w-full rounded border border-[#ccc] px-3 py-2 text-[#666] focus:border-[#2ea3f2] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 inline-block w-fit rounded bg-[#204ce5] px-6 py-3 font-medium text-white hover:bg-[#001ab3] disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Submit'}
            </button>
            {status === 'error' && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
