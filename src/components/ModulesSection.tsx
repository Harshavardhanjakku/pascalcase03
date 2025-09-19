'use client';

import { SpeakerWaveIcon, PhoneIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const modules = [
  {
    icon: SpeakerWaveIcon,
    title: 'Marketing',
    description:
      'We help you create complete end-to-end marketing funnels, customer journeys, campaigns, industry-specific integrations & marketing analytics',
  },
  {
    icon: PhoneIcon,
    title: 'Customer Service',
    description:
      'Connect to Call centers, self-help portals, knowledge-base, SLA management, entitlements & more',
  },
  {
    icon: CogIcon,
    title: 'Field Service',
    description: 'Bring customer service capabilities to customer locations.',
  },
  {
    icon: ChartBarIcon,
    title: 'Sales',
    description:
      'Get access to lead management, sales funnels, opportunity management, order processing, reports & more with Dynamics 365 Sales module.',
  },
];

export default function ModulesSection() {
  return (
    <section
      className="pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-16"
      style={{ background: 'linear-gradient(to bottom, var(--surface-1), transparent)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.25 }}
          className="section-header"
        >
          <h2 className="section-title">
            We build industry specific solutions/tools for Dynamics 365 modules
          </h2>
          <p className="section-subtitle">
            Transform your business processes with our specialized expertise across all major
            Dynamics 365 modules
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: false }}
                className="module-card"
              >
                <div className="module-icon">
                  <IconComponent className="h-8 w-8" />
                </div>

                <div className="text-center">
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
