import { getAllPosts, getPostBySlug } from '@/lib/blog/api';
import BlogCard from '@/components/BlogCard';
import { toBlogCardProps } from '@/lib/blog/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blog.module.css';

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetail({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();
  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedSidebar = allPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aSame = a.category === post.category ? 0 : 1;
      const bSame = b.category === post.category ? 0 : 1;
      if (aSame !== bSame) return aSame - bSame; // same-category first
      // fall back to publishedAt desc if available
      const ad = a.publishedAt ?? '';
      const bd = b.publishedAt ?? '';
      return bd.localeCompare(ad);
    })
    .slice(0, 15);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <article className="lg:col-span-8 xl:col-span-8">
          <header className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
            <h1 className={`mb-4 text-3xl font-bold ${styles.clampedTitle}`}>{post.title}</h1>
            <div className="text-text-muted mb-3 flex items-center justify-between text-sm">
              <span>{post.author}</span>
              <div className="flex items-center gap-2">
                {post.publishedAt ? (
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                ) : null}
                <span>• {post.readTime}</span>
              </div>
            </div>
            <div className="text-text-muted flex flex-wrap items-center gap-2 text-sm">
              <span
                className="inline-flex items-center rounded-full px-2 py-0.5 font-medium text-white"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                {post.category}
              </span>
              {post.tags?.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full px-2 py-0.5 font-medium text-white"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  #{t}
                </span>
              ))}
            </div>
          </header>
          <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
          <section
            className={'prose max-w-none border-t border-slate-200 pt-6 dark:border-slate-700'}
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />

          {/* Removed static FAQ section to display only Contentful content */}

          <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
            <h2 className="mb-4 text-xl font-semibold">Related blogs</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} {...toBlogCardProps(r)} />
              ))}
            </div>
          </section>
        </article>
        <aside className="lg:col-span-4 xl:col-span-4">
          <div className="sidebarLightForce sticky top-24 rounded-xl border border-slate-200 p-6 dark:border-slate-700">
            <h3 className="mb-4 text-lg font-semibold">Related blogs</h3>
            <ul className="list-disc space-y-2 pl-5">
              {relatedSidebar.map((r) => (
                <li key={r.slug} className="leading-snug">
                  <Link href={`/blog/${r.slug}`} className="hover:underline">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
