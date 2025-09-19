import Link from 'next/link';

export default function CallToActionBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl sm:p-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/10 to-white/0" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h3 className="text-center text-2xl font-semibold sm:text-left">
            Ready to transform your Dynamics 365 experience?
          </h3>
          <div className="flex gap-3">
            <Link
              href="#"
              className="rounded-full px-5 py-2.5 font-medium text-white"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Chat on Microsoft Teams
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-5 py-2.5 font-medium text-white"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
