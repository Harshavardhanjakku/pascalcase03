'use client';
import { useId, useState } from 'react';
import { motion } from 'framer-motion';

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactSection() {
  const formId = useId();
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | 'ok' | 'error'>(null);

  const setField = (key: keyof ContactFormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const errors = {
    name: form.name.trim() ? undefined : 'Name is required.',
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? undefined : 'Enter a valid email.',
    company: form.company.trim() ? undefined : 'Company is required.',
    message: form.message.trim() ? undefined : 'Message is required.',
  } as const;

  const hasErrors = Object.values(errors).some(Boolean);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true, message: true });
    if (hasErrors) return;
    setSubmitting(true);
    try {
      // Simulate request; wire to API route later
      await new Promise((r) => setTimeout(r, 900));
      setSubmitted('ok');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setSubmitted('error');
    } finally {
      setSubmitting(false);
    }
  };

  const helperText = (key: keyof ContactFormState) => {
    const msg = errors[key];
    if (!touched[key] || !msg) return null;
    return (
      <p
        id={`${formId}-${key}-error`}
        role="alert"
        className="mt-2 flex items-center gap-1 text-xs font-medium text-red-500"
      >
        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {msg}
      </p>
    );
  };

  const inputClasses = (invalid?: boolean) =>
    `form-input ${invalid ? 'border-red-400/60 ring-red-400/60' : ''}`;

  return (
    <section aria-labelledby="contact-heading" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {/* Single outer card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="contact-form mx-auto max-w-3xl"
      >
        <header className="mb-4">
          <h2
            id="contact-heading"
            className="text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact Us
          </h2>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
            We usually respond within one business day. Tell us a little about your needs.
          </p>
        </header>

        {/* Form without inner card styling */}
        <form
          noValidate
          onSubmit={onSubmit}
          className="space-y-4"
          aria-describedby={submitted === 'ok' ? `${formId}-success` : undefined}
        >
          {/* Row: Name + Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Name with icon + floating label */}
            <div className="relative">
              <span
                className="pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2"
                style={{ color: 'var(--text-secondary)' }}
              >
                {/* user icon */}
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 22a8 8 0 1 0-16 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                required
                aria-required="true"
                aria-invalid={Boolean(touched.name && errors.name)}
                aria-describedby={touched.name && errors.name ? `${formId}-name-error` : undefined}
                value={form.name}
                onChange={(e) => setField('name', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                placeholder=" "
                className={`${inputClasses(touched.name && Boolean(errors.name))} peer pl-9`}
              />
              <label htmlFor={`${formId}-name`} className="form-label">
                Name
              </label>
              {helperText('name')}
            </div>

            {/* Email */}
            <div className="relative">
              <span
                className="pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2"
                style={{ color: 'var(--text-secondary)' }}
              >
                {/* mail icon */}
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m3 7 9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                required
                aria-required="true"
                aria-invalid={Boolean(touched.email && errors.email)}
                aria-describedby={
                  touched.email && errors.email ? `${formId}-email-error` : undefined
                }
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder=" "
                className={`${inputClasses(touched.email && Boolean(errors.email))} peer pl-9`}
              />
              <label htmlFor={`${formId}-email`} className="form-label">
                Email
              </label>
              {helperText('email')}
            </div>
          </div>

          {/* Company */}
          <div className="relative">
            <span
              className="pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2"
              style={{ color: 'var(--text-secondary)' }}
            >
              {/* building icon */}
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path
                  d="M7 21V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 10h.01M12 10h.01M15 10h.01M9 13h.01M12 13h.01M15 13h.01"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              id={`${formId}-company`}
              name="company"
              type="text"
              required
              aria-required="true"
              aria-invalid={Boolean(touched.company && errors.company)}
              aria-describedby={
                touched.company && errors.company ? `${formId}-company-error` : undefined
              }
              value={form.company}
              onChange={(e) => setField('company', e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, company: true }))}
              placeholder=" "
              className={`${inputClasses(touched.company && Boolean(errors.company))} peer pl-9`}
            />
            <label htmlFor={`${formId}-company`} className="form-label">
              Company
            </label>
            {helperText('company')}
          </div>

          {/* Message */}
          <div className="relative">
            <span
              className="pointer-events-none absolute top-3 left-3 z-10"
              style={{ color: 'var(--text-secondary)' }}
            >
              {/* message icon */}
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12a8 8 0 0 1-11.8 7L3 20l1-6A8 8 0 1 1 21 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <textarea
              id={`${formId}-message`}
              name="message"
              required
              aria-required="true"
              aria-invalid={Boolean(touched.message && errors.message)}
              aria-describedby={
                touched.message && errors.message ? `${formId}-message-error` : undefined
              }
              value={form.message}
              onChange={(e) => setField('message', e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, message: true }))}
              placeholder=" "
              className={`${inputClasses(touched.message && Boolean(errors.message))} peer resize-vertical min-h-[120px] pl-9`}
            />
            <label htmlFor={`${formId}-message`} className="form-label">
              Message
            </label>
            {helperText('message')}
          </div>

          {/* CTA */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={submitting}
            className="form-submit"
            aria-busy={submitting}
          >
            {submitting ? 'Sending…' : 'Send Message'}
          </motion.button>

          {submitted === 'ok' && (
            <div
              id={`${formId}-success`}
              className="mt-4 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4"
            >
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium text-green-800">
                Thanks! We received your message and will get back to you shortly.
              </p>
            </div>
          )}
          {submitted === 'error' && (
            <div className="mt-4 flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium text-red-800">
                Something went wrong. Please try again.
              </p>
            </div>
          )}
        </form>

        {/* Extra Contact Info - icon buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:support@pascalcase.com"
            className="contact-icon"
            aria-label="Email support"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m3 7 9 6 9-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a href="#" className="contact-icon" aria-label="LinkedIn">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98Zm7.49 0H14.3v1.64h.05c.44-.83 1.51-1.7 3.11-1.7 3.33 0 3.94 2.19 3.94 5.05V21h-3.96v-5.2c0-1.24-.02-2.83-1.73-2.83-1.74 0-2.01 1.36-2.01 2.74V21H10.5V8.98Z" />
            </svg>
          </a>

          <span className="ml-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
            support@pascalcase.com
          </span>
        </div>
      </motion.div>
    </section>
  );
}
