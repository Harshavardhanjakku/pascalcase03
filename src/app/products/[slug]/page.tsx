/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';

type Params = { params: Promise<{ slug: string }> };

const copy: Record<string, { title: string; body: string }> = {
  'metadata-browser': {
    title: 'Metadata Browser',
    body: 'Examine and export Dataverse metadata such as tables, columns, relationships and keys.',
  },
  'data-mask': {
    title: 'Data Mask for Dataverse',
    body: 'Mask or tokenize sensitive data across environments with confidence.',
  },
  'ai-autocloser': {
    title: 'AI Autocloser',
    body: 'Automatically close non-actionable tickets with AI assistance.',
  },
  'commission-365': {
    title: 'Commission 365',
    body: 'Design commission plans and incentives for your sales teams.',
  },
  'html-to-pdf': {
    title: 'HTML To PDF Converter',
    body: 'Convert HTML templates to pixel-perfect PDFs with ease.',
  },
  'flow-monitor': {
    title: 'Flow Monitor',
    body: 'Monitor Power Automate flows across environments with rich insights.',
  },
};

export default async function ProductDetail({ params }: Params) {
  const { slug } = await params;
  const data = copy[slug] ?? { title: 'Product', body: 'Details coming soon.' };

  // Special handling for ai-autocloser
  if (slug === 'ai-autocloser') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          {/* Back link removed since /products page no longer exists */}

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                AI Autocloser for Dataverse
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Auto-resolve the cases with AI Auto-closer.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Main Product */}
          <div className="space-y-8">
            {/* Product Description (match data-mask style) */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                About the App
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Resolve your cases quickly using AI Autocloser. It is an app for the Dataverse that
                auto-resolves cases that require no further action. The app closes only
                non-actionable tickets, where the customer has thanked you and has no additional
                requests to be made.
              </p>
              <a
                href="https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.autocloser?tab=DetailsAndSupport"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600/90 px-6 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-700/90 hover:shadow-xl dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download from Microsoft AppSource
              </a>
            </div>

            {/* Why This App (2x2 grid like data-mask) */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Why This App?
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {[
                  {
                    title: 'Automated Case Resolution',
                    body: 'Intelligently identifies and resolves non-actionable cases automatically, reducing manual workload.',
                  },
                  {
                    title: 'Enhanced Productivity',
                    body: "Focus your team's efforts on cases that require human intervention and complex problem-solving.",
                  },
                  {
                    title: 'One-Time Configuration',
                    body: 'Set up once and let AI handle the rest. Minimal ongoing maintenance required.',
                  },
                  {
                    title: 'Cost Savings',
                    body: 'Reduce operational costs by automating routine case closures and improving efficiency.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl p-5"
                    style={{
                      backgroundColor: 'var(--surface-2)',
                      border: '1px solid',
                      borderColor: 'var(--border-default)',
                    }}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                        <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Combined: How It Works + Image + Book a Call (like original) */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Automate Case Resolution with AI Auto-closer for Incoming Emails
                  </h2>
                  <div
                    className="mb-6 rounded-xl border-l-4 border-purple-500 p-6"
                    style={{ backgroundColor: 'var(--surface-2)' }}
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500 text-lg font-bold text-white">
                        AI
                      </div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Intelligent Email Processing
                      </h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      AI Autocloser efficiently handles incoming emails by identifying
                      non-actionable cases and resolving them. When a customer expresses
                      satisfaction without any additional requests through mail, Autocloser
                      recognizes this and closes the case automatically.
                    </p>
                  </div>
                  <a
                    href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=AIAutocloser%20Demo"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600/90 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700/90 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                    Book a Call or Demo
                  </a>
                </div>
                <div>
                  <img
                    src="/our_products/AIAutocloser.png"
                    alt="AI Autocloser"
                    className="w-full rounded-xl border"
                    style={{ borderColor: 'var(--border-default)' }}
                  />
                </div>
              </div>
            </div>

            {/* Demo Video */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Watch the Demo
              </h2>
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/ZLRMSvkUlpI"
                  title="AI Autocloser Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex w-full justify-center">
          <a
            href="https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.autocloser?tab=DetailsAndSupport"
            className="rounded-lg bg-blue-600/90 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700/90 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Download from Microsoft AppSource
          </a>
        </div>
      </main>
    );
  }

  // Special handling for data-mask
  if (slug === 'data-mask') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          {/* Back link removed since /products page no longer exists */}

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Data Mask App for Dataverse
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Make your Power Platform sandbox environments more secure by replacing sensitive
                data with dummy data
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Row 1: About the App */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              About the App
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Mask/Anonymize/Obfuscate Dataverse data with random characters and numbers, mock data
              from pre-built formats. You can also easily select the fields to be masked or simply
              deleted.
            </p>

            <a
              href="https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.datamask?tab=Overview"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600/90 px-6 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-700/90 hover:shadow-xl dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
              Download from Microsoft AppSource
            </a>
          </div>

          {/* Row 2: Why This App */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Why This App?
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: 'Secure your sandbox environments',
                  body: 'The app ensures that your testing and development activities can be conducted without compromising confidential data.',
                },
                {
                  title: 'Anonymization',
                  body: 'The app replaces sensitive data with realistic anonymous values, ensuring personal information remains unlinked to specific individuals.',
                },
                {
                  title: 'Data Privacy & Compliance',
                  body: 'Comply with data privacy regulations like GDPR, HIPAA, or CCPA by masking personal & sensitive information.',
                },
                {
                  title: 'Data Protection',
                  body: 'Safeguard sensitive data from unauthorized access or exposure, reducing the risk of data breaches, cyberattacks, and internal data leaks.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: 'var(--surface-2)',
                    border: '1px solid',
                    borderColor: 'var(--border-default)',
                  }}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: How It Works (image) */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              How does Data Mask app work?
            </h2>
            <div className="w-full">
              <img
                src="/our_products/DataMaskingImage.png"
                alt="Data Masking Production to Sandbox"
                className="w-full rounded-xl border"
                style={{ borderColor: 'var(--border-default)' }}
              />
            </div>
          </div>

          {/* Row 4: Demo Video */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Watch the Demo
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/jWjaJS_7Zus"
                title="Data Mask Tool for Dataverse"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Book a call or demo */}
          <div className="flex w-full justify-center">
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=DataMask%20Demo"
              className="rounded-lg bg-blue-600/90 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700/90 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Book a Call or Demo
            </a>
          </div>

          {/* FAQs */}
          <div
            className="mt-8 rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              border: '1px solid',
              borderColor: 'var(--border-default)',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              FAQS
            </h2>
            <h3 className="mb-4 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              Frequently Asked Questions
            </h3>
            <FaqAccordion
              items={
                [
                  {
                    q: 'Is the app free to test?',
                    a: (
                      <p>
                        The app is free to test without a valid license. However, there is a record
                        restriction of 1,000 records per run without a license.
                      </p>
                    ),
                  },
                  {
                    q: 'How can I install the app?',
                    a: (
                      <p>
                        This app is available as managed solution. You can directly download the app
                        from{' '}
                        <a
                          href="https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.datamask?tab=Overview"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-blue-500 hover:underline"
                        >
                          this link
                        </a>
                        , and follow the steps in the{' '}
                        <a
                          href="https://youtu.be/jWjaJS_7Zus"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-blue-500 hover:underline"
                        >
                          video
                        </a>
                        .
                      </p>
                    ),
                  },
                  {
                    q: 'How can I use the app for more than 1,000 records?',
                    a: <p>You can reach out to us through Microsoft Teams or contact us page.</p>,
                  },
                  {
                    q: 'How efficiently does your app handle data masking?',
                    a: (
                      <p>
                        Our app efficiently masks 200,000 records in 15 minutes and up to 1 million
                        records in 60 to 70 minutes, ensuring speedy and secure data masking.
                      </p>
                    ),
                  },
                  {
                    q: 'Can I selectively mask tables and attributes?',
                    a: <p>Yes, it is possible to configure tables and attributes to mask.</p>,
                  },
                ] as FaqItem[]
              }
            />
          </div>
        </div>
      </main>
    );
  }

  // Special handling for html-to-pdf
  if (slug === 'html-to-pdf') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Back link */}
        <div className="mb-8" />

        {/* Hero */}
        <div
          className="mb-8 rounded-2xl p-8 backdrop-blur-sm"
          style={{
            backgroundColor: 'var(--surface-card)',
            border: '1px solid',
            borderColor: 'var(--border-default)',
          }}
        >
          <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Html to Pdf converter for Power Automate
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Convert Html content to Pdf documents using Power Automate flows
          </p>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Say goodbye to the restrictive 2MB limit. Now, you can create heavy-duty pdf documents
            without size constraints.
          </p>
          <div className="mt-6">
            <a
              href="https://learn.microsoft.com/en-us/connectors/htmltopdfconverter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
              Visit Microsoft Docs
            </a>
          </div>
        </div>

        {/* Intro advantages */}
        <div
          className="mb-8 rounded-2xl p-8 backdrop-blur-sm"
          style={{
            backgroundColor: 'var(--surface-card)',
            border: '1px solid',
            borderColor: 'var(--border-default)',
          }}
        >
          <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            A Power Automate premium connector for converting HTML content to PDF documents
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: 'Free for one page',
                body: 'You can use it without a licensing key for one page.',
              },
              {
                title: 'It can process large HTML content',
                body: 'Fast and Powerful.',
              },
              {
                title: 'Power Automate connector',
                body: 'Use it from Power Automat flow.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'var(--surface-2)',
                  border: '1px solid',
                  borderColor: 'var(--border-default)',
                }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div
          className="mb-8 rounded-2xl p-8 backdrop-blur-sm"
          style={{
            backgroundColor: 'var(--surface-card)',
            border: '1px solid',
            borderColor: 'var(--border-default)',
          }}
        >
          <h2 className="mb-2 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Pricing
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Pay yearly and cancel anytime.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--surface-2)' }}
            >
              <h3 className="mb-2 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Free Version
              </h3>
              <div className="mb-3 text-3xl font-bold">$0</div>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li>Convert HTML content to pdf document (one page only)</li>
                <li>Available on Power Automate</li>
                <li>100 calls per month</li>
              </ul>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--surface-2)' }}
            >
              <h3 className="mb-2 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Paid
              </h3>
              <div className="mb-1 text-3xl font-bold">
                $49<span className="text-base font-normal"> per month*</span>
              </div>
              <p className="mb-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
                *billed annually
              </p>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li>Convert HTML content to pdf document (Up to 5 pages)</li>
                <li>Up to 10MB of HTML content</li>
                <li>1000 calls per month</li>
              </ul>
              <a
                href="https://buy.stripe.com/dR6g269fm7BQbuMfZ1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Purchase Using Stripe
              </a>
              <p className="mt-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                Credit card required.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div
          className="mb-8 rounded-2xl p-8 backdrop-blur-sm"
          style={{
            backgroundColor: 'var(--surface-card)',
            border: '1px solid',
            borderColor: 'var(--border-default)',
          }}
        >
          <h2 className="mb-2 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            FAQS
          </h2>
          <h3 className="mb-6 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h3>
          <FaqAccordion
            items={
              [
                {
                  q: 'Can I cancel the subscription at any time?',
                  a: <p>Yes, you can cancel the plan anytime.</p>,
                },
                { q: "Can I get a refund if I'm not satisfied?", a: <p>Yes, you can.</p> },
                {
                  q: 'Can I get a free trial before subscribing?',
                  a: <p>There is a free version available without requiring a license key.</p>,
                },
              ] as FaqItem[]
            }
          />
        </div>

        {/* Setting up */}
        <div
          className="mb-8 rounded-2xl p-8 backdrop-blur-sm"
          style={{
            backgroundColor: 'var(--surface-card)',
            border: '1px solid',
            borderColor: 'var(--border-default)',
          }}
        >
          <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Setting up:
          </h2>
          {/* Step 1 */}
          <div className="mb-8">
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              1. Search for HTML to PDF by Pascalcase in the &quot;add an action&quot; section and
              select the Pascalcase connector. (Refer Image - H1)
            </p>
            <img
              src="/our_products/Image1–H1-HTMLToPDF.png"
              alt="HTML to PDF H1"
              className="w-full rounded-xl border"
              style={{ borderColor: 'var(--border-default)' }}
            />
          </div>
          {/* Step 2 */}
          <div className="mb-8">
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              2. Provide the HTML string or code along with an optional key. The key, provided by
              Pascalcase Software Pvt. Ltd., enables users to generate multi-page PDFs. By default,
              the HTML string contains pre-defined values, but users can customize it according to
              their requirements. (Refer Image - H2)
            </p>
            <img
              src="/our_products/Image1–H2-HTMLToPDF.png"
              alt="HTML to PDF H2"
              className="w-full rounded-xl border"
              style={{ borderColor: 'var(--border-default)' }}
            />
          </div>
          {/* Step 3 */}
          <div className="mb-8">
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              3. After running the flow, the response will be a byte array that can be used as file
              content for various purposes, such as storing in Dataverse or SharePoint. (Refer Image
              - H3)
            </p>
            <img
              src="/our_products/Image1–H3-HTMLToPDF.png"
              alt="HTML to PDF H3"
              className="w-full rounded-xl border"
              style={{ borderColor: 'var(--border-default)' }}
            />
          </div>
          {/* Step 4 */}
          <div className="mb-8">
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              4. Note, while creating a OneDrive, Dataverse, or SharePoint PDF file, you must parse
              the output of the connector using the below schema. (Refer Image – H4)
            </p>
            <img
              src="/our_products/Image–H4-HTMLToPDF.png"
              alt="HTML to PDF H4"
              className="mb-4 w-full rounded-xl border"
              style={{ borderColor: 'var(--border-default)' }}
            />
            <h3 className="mb-2 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              Schema
            </h3>
            <div
              className="overflow-auto rounded-xl border p-4 text-sm"
              style={{
                borderColor: 'var(--border-default)',
                backgroundColor: 'var(--surface-2)',
                color: 'var(--text-secondary)',
              }}
            >
              <pre className="break-words whitespace-pre-wrap">{`{ "type": "object", "properties": { "statusCode": {"type": "integer"}, "headers": { "type": "object", "properties": { "Pragma": {"type": "string"}, "Vary": {"type": "string"}, "Cache-Control": {"type": "string"}, "Set-Cookie": {"type": "string"}, "X-AspNet-Version": {"type": "string"}, "X-Powered-By": {"type": "string"}, "Timing-Allow-Origin": {"type": "string"}, "x-ms-apihub-cached-response": {"type": "string"}, "x-ms-apihub-obo": {"type": "string"}, "Date": {"type": "string"}, "Content-Type": {"type": "string"}, "Expires": {"type": "string"}, "Content-Length": {"type": "string"} } }, "body": {"type": "string"} } }`}</pre>
            </div>
          </div>
          {/* Step 5 */}
          <div>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              5. The desired file can then be created using the body output from the parsed object.
              It&apos;s vital to remember that when creating PDF files for OneDrive or SharePoint,
              you must use the base64to Binary function to convert the body to binary. (Refer to
              Image H5 below)
            </p>
            <img
              src="/our_products/Image–H5-HTMLToPDF.png"
              alt="HTML to PDF H5"
              className="w-full rounded-xl border"
              style={{ borderColor: 'var(--border-default)' }}
            />
          </div>
        </div>

        {/* Bottom CTAs intentionally removed */}
      </main>
    );
  }

  // Special handling for commission-365
  if (slug === 'commission-365') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          {/* Back link removed since /products page no longer exists */}

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Commission 365 for Dataverse
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Configure commissions for your sales staff.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* About the App */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              About the App
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Commission 365 is a tool by Pascalcase for Dynamics 365 Sales App &amp; PowerApps that
              allows you to configure commissions, incentives and bonus plans for your sales staff.
              You can customise plans and automate the complete process. This App gives complete
              control over the ruleset, including type of data, eligible people, frequency of
              commissions paid, etc.
            </p>
            <a
              href="https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.commission365?tab=Overview"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600/90 px-6 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-700/90 hover:shadow-xl dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
              Download from Microsoft AppSource
            </a>
          </div>

          {/* Why This App - pills in 2 rows */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Why This App?
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                'Simplify complex calculations',
                'Offers a variety of options',
                'Live progress tracking',
                'One time configuration',
                'Low cost implementation',
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: 'var(--surface-2)',
                    border: '1px solid',
                    borderColor: 'var(--border-default)',
                  }}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automate Sales Incentives + Image + CTA */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Automate Sales Incentives with Commission 365
                </h2>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Commission 365 helps you in creating tailored incentives based on your
                  preferences. Choose when you want to receive commissions and the calculation
                  method that suits you best. With two types of calculations, Count-Based &amp;
                  Percentage-Based, This App ensures a personalized commission experience tailored
                  to your needs.
                </p>
                <a
                  href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=Commission365%20Demo"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600/90 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700/90 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                  Book a Call or Demo
                </a>
              </div>
              <div>
                <img
                  src="/our_products/commission365NEW.png"
                  alt="Commission 365"
                  className="w-full rounded-xl border"
                  style={{ borderColor: 'var(--border-default)' }}
                />
              </div>
            </div>
          </div>

          {/* Banner Image above Download for Free! */}
          <div
            className="rounded-2xl p-6 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <img
              src="/our_products/commission365(2).png"
              alt="Commission 365 Features"
              className="w-full rounded-xl border"
              style={{ borderColor: 'var(--border-default)' }}
            />
          </div>

          {/* Download for Free! */}
          <div className="flex w-full justify-center">
            <a
              href="https://appsource.microsoft.com/en/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.commission365?tab=Overview"
              className="rounded-lg bg-blue-600/90 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700/90 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Download for Free!
            </a>
          </div>
        </div>
      </main>
    );
  }

  // Special handling for flow-monitor
  if (slug === 'flow-monitor') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          {/* Back link removed since /products page no longer exists */}

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Flow Monitor for Power Automate
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Monitor thousands of flows effectively across all environments.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* About the App */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              About the App
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Flow Monitor provides seamless tracking and in‑depth monitoring of your Power Automate
              flows across all environments. Gain detailed insights into flow performance, including
              execution duration and failure reasons. Receive timely notifications for failed flows
              and regular updates from all environments, ensuring you stay informed and in control.
            </p>
            <a
              href="https://appsource.microsoft.com/en-us/product/web-apps/pascalcasesoftwareprivatelimited1662384934323.flowmonitor?ocid=GTMRewards_WhatsNewBlog_flowmonitor_08012024"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600/90 px-6 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-700/90 hover:shadow-xl dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
              Download from Microsoft AppSource
            </a>
          </div>

          {/* Why This App */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Why This App?
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                'Stay notified and updated',
                'Centralized monitoring',
                'Insightful analytics',
                'Multi‑environment compatibility',
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: 'var(--surface-2)',
                    border: '1px solid',
                    borderColor: 'var(--border-default)',
                  }}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Improve experience + Image + CTA */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Improve your Power Automate experience with Flow Monitor
                </h2>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Monitor all flows using dashboards, charts and visualizations. Access detailed
                  insights, understand flow failures, and make better decisions with centralized
                  visibility.
                </p>
                <a
                  href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=FlowMonitor%20Demo"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:from-purple-700 hover:to-indigo-700"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                  Book a Call or Demo
                </a>
              </div>
              <div>
                <img
                  src="/our_products/flow.webp"
                  alt="Flow Monitor"
                  className="w-full rounded-xl border"
                  style={{ borderColor: 'var(--border-default)' }}
                />
              </div>
            </div>
          </div>

          {/* Demo Video */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Watch the Demo
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/z86lb_9OwpI"
                title="Flow Monitor Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex w-full justify-center">
            <a
              href="https://appsource.microsoft.com/en-us/product/web-apps/pascalcasesoftwareprivatelimited1662384934323.flowmonitor?ocid=GTMRewards_WhatsNewBlog_flowmonitor_08012024"
              className="rounded-lg bg-blue-600/90 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700/90 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Download from Microsoft AppSource
            </a>
          </div>
        </div>
      </main>
    );
  }

  // Special handling for metadata-browser
  if (slug === 'metadata-browser') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Pascalcase Metadata Browser for Dataverse
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                for Dynamics 365 & PowerApps
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Row 1: Two-column layout for main content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Left Column - Main Product */}
            <div className="flex">
              {/* Product Description */}
              <div
                className="flex w-full flex-col rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  About the Extension
                </h2>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Pascalcase Metadata Browser is an extension for Microsoft Edge browser for
                  accessing metadata of Dataverse (Dynamics 365 and PowerApps) instances. You can
                  easily browse properties like tables, columns, relationships, choices, etc. and
                  export to CSV files.
                </p>

                <div
                  className="rounded-xl border-l-4 border-blue-500 p-6"
                  style={{ backgroundColor: 'var(--surface-2)' }}
                >
                  <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Key Advantage
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    The main advantage of this extension is that it will automatically show you the
                    logical names of the tables and their columns on UI forms, assisting you not to
                    always navigate to your solution to find the logical names.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <a
                    href="https://microsoftedge.microsoft.com/addons/detail/metadata-browser-for-dyna/fdfelmicclblfanogpnejdogjjildbkf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:from-blue-700 hover:to-indigo-700"
                  >
                    <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                    Download from Microsoft Edge
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Alternative */}
            <div className="flex">
              {/* Safyr Section */}
              <div
                className="flex w-full flex-col rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h3 className="mb-4 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Safyr for Microsoft Dynamics 365 Metadata
                </h3>
                <p
                  className="mb-6 flex-grow leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Safyr for Microsoft Dynamics 365 Metadata is a powerful metadata tool, which
                  allows you to download metadata as a .mdb file. The data present in the file is
                  directly extracted from your Microsoft Dataverse instance. This file contains a
                  list of metadata components such as tables, columns, entities, keys, option sets,
                  relationships, etc. You can expand any table and find the required information
                  like primary keys, foreign keys, logical names, schema names and more. The main
                  advantage of using this tool is, it allows you to speed up the source data
                  discovery process for many projects such as data catalog, data governance, data
                  warehouse, master data, data integration, etc.
                </p>

                <a
                  href="https://www.silwoodtechnology.com/products/safyr-for-microsoft-dynamics-365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                  Go to Silwood Technology website
                </a>
              </div>
            </div>
          </div>

          {/* Row 2: Video Section - Full Width */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Watch the Demo
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/WGOKc2VnODY"
                title="Metadata Browser for Dataverse"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Row 3: Features Section - Full Width */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--border-default)',
              border: '1px solid',
            }}
          >
            <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Features
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                'Download Microsoft Dataverse metadata as a .mdb file',
                'Direct extraction from your Dataverse instance',
                'Browse tables, columns, entities, keys, option sets, relationships',
                'Expand tables to view primary/foreign keys, logical and schema names',
                'Accelerate discovery for data catalog, governance, warehouse, MDM and integration projects',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-blue-500" />
                  <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Default product page for other products
  return (
    <main
      id="content"
      className="mx-auto max-w-4xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
    >
      <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
        {data.title}
      </h1>
      <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
        {data.body}
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="#"
          className="bg-accent rounded-md px-4 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          Download
        </a>
      </div>
    </main>
  );
}
