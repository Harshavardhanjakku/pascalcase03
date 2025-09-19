import Link from 'next/link';
import Hero from '@/components/Hero';
import CustomersSection from '@/components/CustomersSection';
import ModulesSection from '@/components/ModulesSection';
import HeroIntro from '@/components/about/HeroIntro';
import FeatureGrid from '@/components/about/FeatureGrid';
import BlogSlider from '@/components/BlogSlider';
import ContactSection from '@/components/ContactSection';
import { getLatestPosts } from '@/lib/blog/api';

export const revalidate = 60; // ISR: revalidate every 60s

export default async function Home() {
  const posts = await getLatestPosts(3);
  return (
    <div className="min-h-screen">
      <Hero />
      <CustomersSection />
      <ModulesSection />
      <section
        id="why"
        className="mx-auto mt-8 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:scroll-mt-28"
      >
        <HeroIntro />
      </section>
      <section id="features" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6">
        <FeatureGrid />
        <div className="mt-6 flex justify-end">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors hover:opacity-80"
            style={{
              borderColor: 'var(--border-strong)',
              backgroundColor: 'var(--surface-2)',
              color: 'var(--text-primary)',
            }}
          >
            More details →
          </Link>
        </div>
      </section>
      <section
        id="blog"
        className="mx-auto mt-8 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:scroll-mt-28"
      >
        <BlogSlider posts={posts} />
        <div className="mt-6 flex justify-end">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors hover:opacity-80"
            style={{
              borderColor: 'var(--border-strong)',
              backgroundColor: 'var(--surface-2)',
              color: 'var(--text-primary)',
            }}
          >
            More Blogs →
          </Link>
        </div>
      </section>
      <section id="contact" className="scroll-mt-24 md:scroll-mt-28">
        <ContactSection />
      </section>
    </div>
  );
}
