'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');

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

  if (status === 'sent') {
    return (
      <div className="rounded-md bg-white p-6 text-center">
        <p className="text-base font-semibold text-[#112337]">
          Thanks for signing up! We&apos;ll keep you posted.
        </p>
      </div>
    );
  }

  return (
    <form
      name="quote-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="news_name" className="block text-sm font-semibold text-[#112337] mb-1">
          Name (Required)
        </label>
        <input
          type="text"
          name="input_1.3"
          id="news_name"
          required
          className="w-full border border-[#ccc] rounded-md px-3 py-2 text-[#666]"
        />
      </div>

      <div>
        <label htmlFor="news_email" className="block text-sm font-semibold text-[#112337] mb-1">
          Email Address (Required)
        </label>
        <input
          type="email"
          name="input_3"
          id="news_email"
          required
          className="w-full border border-[#ccc] rounded-md px-3 py-2 text-[#666]"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold rounded-md px-8 py-3 self-start disabled:opacity-60"
      >
        {status === 'sending' ? 'Submitting…' : 'Submit'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
