'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
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
      <div className="rounded-md bg-[#f5f5f5] p-8 text-center">
        <p className="text-lg font-semibold text-[#112337]">
          Thank you! Your inquiry has been received. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto flex flex-col gap-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <fieldset>
        <legend className="text-sm font-semibold text-[#112337] mb-2">
          Name <span className="text-[#686e77] font-normal">(Required)</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="input_1.3"
              id="input_1_1_3"
              required
              className="w-full border border-[#ccc] rounded-md px-3 py-2 text-[#666]"
            />
            <label htmlFor="input_1_1_3" className="text-xs text-[#686e77]">
              First
            </label>
          </div>
          <div>
            <input
              type="text"
              name="input_1.6"
              id="input_1_1_6"
              required
              className="w-full border border-[#ccc] rounded-md px-3 py-2 text-[#666]"
            />
            <label htmlFor="input_1_1_6" className="text-xs text-[#686e77]">
              Last
            </label>
          </div>
        </div>
      </fieldset>

      <div>
        <label htmlFor="input_1_3" className="block text-sm font-semibold text-[#112337] mb-1">
          Email Address <span className="text-[#686e77] font-normal">(Required)</span>
        </label>
        <input
          type="email"
          name="input_3"
          id="input_1_3"
          required
          className="w-full border border-[#ccc] rounded-md px-3 py-2 text-[#666]"
        />
      </div>

      <div>
        <label htmlFor="input_1_4" className="block text-sm font-semibold text-[#112337] mb-1">
          Company Name <span className="text-[#686e77] font-normal">(Required)</span>
        </label>
        <input
          type="text"
          name="input_4"
          id="input_1_4"
          required
          className="w-full border border-[#ccc] rounded-md px-3 py-2 text-[#666]"
        />
      </div>

      <div>
        <label htmlFor="input_1_5" className="block text-sm font-semibold text-[#112337] mb-1">
          Phone Number <span className="text-[#686e77] font-normal">(Required)</span>
        </label>
        <input
          type="tel"
          name="input_5"
          id="input_1_5"
          required
          className="w-full border border-[#ccc] rounded-md px-3 py-2 text-[#666]"
        />
      </div>

      <div>
        <label htmlFor="input_1_6" className="block text-sm font-semibold text-[#112337] mb-1">
          Tell us about your training needs{' '}
          <span className="text-[#686e77] font-normal">(Required)</span>
        </label>
        <textarea
          name="input_6"
          id="input_1_6"
          rows={10}
          required
          className="w-full border border-[#ccc] rounded-md px-3 py-2 text-[#666]"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-[#204ce5] hover:bg-[#001ab3] text-white font-semibold rounded-md px-8 py-3 self-start disabled:opacity-60"
      >
        {status === 'sending' ? 'Submitting…' : 'Submit Inquiry'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
