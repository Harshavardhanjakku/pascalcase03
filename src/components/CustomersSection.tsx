'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CustomersSection() {
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
          className="text-center"
        >
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            Our Customers
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Trusted by businesses worldwide to deliver exceptional Dynamics 365 and Power Platform
            solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.25 }}
          className="mt-8 flex justify-center"
        >
          <div className="relative w-full max-w-4xl">
            <Image
              src="/customers.png"
              alt="Our valued customers and partners"
              width={800}
              height={400}
              className="h-auto w-full rounded-lg object-contain shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
