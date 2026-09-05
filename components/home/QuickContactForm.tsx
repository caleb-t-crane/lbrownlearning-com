'use client';

import { useState } from 'react';

export default function QuickContactForm() {
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

  if (status === 'sent') {
    return (
      <div className="rounded-md bg-[#f5f5f5] p-6 text-center">
        <p className="text-[#333] font-medium">
          Thank you! Your message has been received. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name="home-quick-contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-start sm:items-end w-full max-w-xl mx-auto"
    >
      <input type="hidden" name="form-name" value="home-quick-contact" />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="flex-1 w-full">
        <label htmlFor="input_1.3" className="block text-sm font-medium text-[#333] mb-1">
          Name
        </label>
        <input
          id="input_1.3"
          name="input_1.3"
          type="text"
          required
          className="w-full rounded border border-[#ccc] px-3 py-2 text-[#666]"
        />
      </div>
      <div className="flex-1 w-full">
        <label htmlFor="input_3" className="block text-sm font-medium text-[#333] mb-1">
          Email
        </label>
        <input
          id="input_3"
          name="input_3"
          type="email"
          required
          className="w-full rounded border border-[#ccc] px-3 py-2 text-[#666]"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold px-6 py-2 rounded transition-colors whitespace-nowrap"
      >
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm w-full">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
