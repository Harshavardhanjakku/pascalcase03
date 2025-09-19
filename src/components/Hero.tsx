'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Removed product band icons per request

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: false, amount: 0.25 },
});

// Shared styles for product bands to ensure perfect visual consistency
const bandTitleClass = 'section-title';
const bandTextClass = 'mt-4 mx-auto max-w-3xl text-base sm:text-lg leading-relaxed';
const bandCtaClass =
  'product-cta rounded-full px-5 py-3 text-sm font-semibold shadow-medium hover:shadow-large transition-transform hover:-translate-y-0.5';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-5xl">
            <motion.h1 className="hero-title" {...fadeUp(0)}>
              We #build Dynamics 365 and Power Platform tools
            </motion.h1>

            <motion.p
              className="hero-subtitle mx-auto mt-4 max-w-3xl text-balance"
              {...fadeUp(0.08)}
            >
              Transform your Dynamics 365 investment into tangible results with the help of a
              seasoned partner. Choose Pascalcase, where our expertise in Dynamics 365 and Power
              Platform will take your business to the next level.
            </motion.p>

            {/* Removed extra subtext lines per request */}

            {/* Primary CTA */}
            <motion.div className="mt-8 flex items-center justify-center" {...fadeUp(0.2)}>
              <Link
                href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=Website%20Inquiry"
                aria-label="Chat on Microsoft Teams"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                Chat on Microsoft Teams
              </Link>
            </motion.div>

            {/* Products overview bands (full-width) */}
            <motion.div className="mt-8 space-y-0" {...fadeUp(0.24)}>
              {/* Helper to stretch background edge-to-edge */}
              <div className="-mx-4 sm:-mx-6">
                {/* Metadata Browser */}
                <section className="py-10 sm:py-12" style={{ backgroundColor: 'var(--surface-1)' }}>
                  <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
                    <motion.div className="flex items-center justify-center" {...fadeUp(0)}>
                      <h3 className={bandTitleClass} style={{ color: 'var(--text-primary)' }}>
                        Pascalcase Metadata Browser for Dataverse
                      </h3>
                    </motion.div>
                    <motion.p
                      className={bandTextClass}
                      style={{ color: 'var(--text-secondary)' }}
                      {...fadeUp(0.08)}
                    >
                      With over 8,000 downloads, We are the creators of the Metadata browser for
                      Dynamics 365 and Power Platform add-on for Microsoft Edge, which allows you to
                      examine and export Dataverse metadata such as tables, columns, relationships,
                      keys, etc.
                    </motion.p>
                    <motion.div className="mt-6 flex justify-center gap-3" {...fadeUp(0.16)}>
                      <Link
                        href="https://microsoftedge.microsoft.com/addons/detail/metadata-browser-for-dyna/fdfelmicclblfanogpnejdogjjildbkf?hl=en-GB"
                        target="_blank"
                        className={`${bandCtaClass} text-white`}
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                        }}
                      >
                        Download for Microsoft Edge
                      </Link>
                    </motion.div>
                  </div>
                </section>

                {/* Commission 365 */}
                <section className="py-10 sm:py-12">
                  <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
                    <motion.div className="flex items-center justify-center" {...fadeUp(0)}>
                      <h3 className={bandTitleClass} style={{ color: 'var(--text-primary)' }}>
                        Commission 365
                      </h3>
                    </motion.div>
                    <motion.p
                      className={bandTextClass}
                      style={{ color: 'var(--text-secondary)' }}
                      {...fadeUp(0.08)}
                    >
                      Commission 365 is a tool by Pascalcase for the Dynamics 365 Sales App &
                      PowerApps that allows you to configure commissions, incentives and bonus plans
                      for your sales staff. You can customise plans by determining when sales
                      representatives receive commission, the sort of calculation to be used to
                      determine commission, and so on.
                    </motion.p>
                    <motion.div className="mt-6 flex justify-center gap-3" {...fadeUp(0.16)}>
                      <Link
                        href="/products/commission-365"
                        target="_blank"
                        className={`${bandCtaClass} text-white`}
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                        }}
                      >
                        More Info
                      </Link>
                      <Link
                        href="https://appsource.microsoft.com/en/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.commission365?tab=Overview"
                        target="_blank"
                        className={`${bandCtaClass} text-white`}
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                        }}
                      >
                        Download from Microsoft AppSource
                      </Link>
                    </motion.div>
                  </div>
                </section>

                {/* AI Autocloser */}
                <section className="py-10 sm:py-12" style={{ backgroundColor: 'var(--surface-1)' }}>
                  <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
                    <motion.div className="flex items-center justify-center" {...fadeUp(0)}>
                      <h3 className={bandTitleClass} style={{ color: 'var(--text-primary)' }}>
                        AI Autocloser
                      </h3>
                    </motion.div>
                    <motion.p
                      className={bandTextClass}
                      style={{ color: 'var(--text-secondary)' }}
                      {...fadeUp(0.08)}
                    >
                      Resolve your cases quickly using AI Autocloser. It is an app for the Dataverse
                      that auto-resolves cases that require no further action. The app closes only
                      non-actionable tickets, where the customer has thanked you and has no
                      additional requests to be made.
                    </motion.p>
                    <motion.div className="mt-6 flex justify-center gap-3" {...fadeUp(0.16)}>
                      <Link
                        href="/products/ai-autocloser"
                        target="_blank"
                        className={`${bandCtaClass} text-white`}
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                        }}
                      >
                        More Info
                      </Link>
                      <Link
                        href="https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.autocloser?tab=DetailsAndSupport"
                        target="_blank"
                        className={`${bandCtaClass} text-white`}
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                        }}
                      >
                        Download from Microsoft AppSource
                      </Link>
                    </motion.div>
                  </div>
                </section>

                {/* Flow Monitor */}
                <section className="py-10 sm:py-12">
                  <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
                    <motion.div className="flex items-center justify-center" {...fadeUp(0)}>
                      <h3 className={bandTitleClass} style={{ color: 'var(--text-primary)' }}>
                        Flow Monitor for Power Automate
                      </h3>
                    </motion.div>
                    <motion.p
                      className={bandTextClass}
                      style={{ color: 'var(--text-secondary)' }}
                      {...fadeUp(0.08)}
                    >
                      Flow Monitor provides seamless tracking and in-depth monitoring of your Power
                      Automate flows across all environments. Gain detailed insights into flow
                      performance, including execution duration and failure reasons.
                    </motion.p>
                    <motion.div className="mt-6 flex justify-center gap-3" {...fadeUp(0.16)}>
                      <Link
                        href="/products/flow-monitor"
                        target="_blank"
                        className={`${bandCtaClass} text-white`}
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                        }}
                      >
                        More Info
                      </Link>
                      <Link
                        href="https://appsource.microsoft.com/en-us/product/web-apps/pascalcasesoftwareprivatelimited1662384934323.flowmonitor?ocid=GTMRewards_WhatsNewBlog_flowmonitor_08012024"
                        target="_blank"
                        className={`${bandCtaClass} text-white`}
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                        }}
                      >
                        Download from Microsoft AppSource
                      </Link>
                    </motion.div>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
