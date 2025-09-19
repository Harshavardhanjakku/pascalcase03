'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import type { BlogPostWithImage } from '@/lib/blog/types';
import { toBlogCardProps } from '@/lib/blog/types';

type BlogSliderProps = {
  posts: BlogPostWithImage[];
};

export default function BlogSlider({ posts }: BlogSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [viewMode, setViewMode] = useState<'flash' | 'grid'>('grid');
  const [slideWidth, setSlideWidth] = useState(0);

  const GAP_PX = 16; // gap-4

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerView(3);
      else if (w >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    // Measure width of a single slide to compute exact translateX in px
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const firstSlide = container.querySelector('[data-slide="1"]') as HTMLElement | null;
      if (firstSlide) {
        setSlideWidth(firstSlide.getBoundingClientRect().width);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [itemsPerView, viewMode, posts.length]);

  const maxIndex = Math.max(0, posts.length - itemsPerView);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const goPrev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [maxIndex, goPrev, goNext]);

  // Swipe support
  const swipeHandlers = {
    drag: 'x' as const,
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0.2,
    onDragEnd: (_: unknown, info: { offset: { x: number } }) => {
      const threshold = 60;
      if (info.offset.x < -threshold) goNext();
      if (info.offset.x > threshold) goPrev();
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      aria-label="Blog posts"
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="mb-4 flex items-center justify-center"
      >
        <h2 className="section-title text-center" style={{ color: 'var(--text-primary)' }}>
          Blogs
        </h2>
      </motion.div>

      {/* Segmented control: Grid / Flashcard (restored), centered below the title */}
      <div className="mb-4 flex items-center justify-center">
        <div
          className="relative inline-flex items-center rounded-full border p-1 backdrop-blur"
          style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface-card)' }}
          role="tablist"
          aria-label="View mode"
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className="absolute top-1 bottom-1 rounded-full"
            style={{
              left: viewMode === 'grid' ? '4px' : '50%',
              right: viewMode === 'grid' ? '50%' : '4px',
              backgroundColor: 'var(--surface-2)',
            }}
            aria-hidden
          />
          <button
            role="tab"
            aria-selected={viewMode === 'grid'}
            onClick={() => setViewMode('grid')}
            className="relative z-[1] inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors"
            style={{ color: viewMode === 'grid' ? 'var(--text-primary)' : 'var(--text-secondary)' }}
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
              />
            </svg>
            Grid
          </button>
          <button
            role="tab"
            aria-selected={viewMode === 'flash'}
            onClick={() => setViewMode('flash')}
            className="relative z-[1] inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors"
            style={{
              color: viewMode === 'flash' ? 'var(--text-primary)' : 'var(--text-secondary)',
            }}
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="4"
                y="6"
                width="16"
                height="12"
                rx="3"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M8 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Cards
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((p) => (
            <BlogCard key={p.slug} {...toBlogCardProps(p)} />
          ))}
        </motion.div>
      ) : (
        <div className="relative px-10 sm:px-16">
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              {...swipeHandlers}
              className="flex items-stretch"
              style={{ ['--g' as string]: `${GAP_PX}px`, gap: `${GAP_PX}px` }}
              animate={{ x: -index * (slideWidth + GAP_PX) }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            >
              {posts.map((p, i) => (
                <div
                  key={p.slug}
                  data-slide={i + 1}
                  className="flex"
                  style={{
                    flex: `0 0 calc((100% - (var(--g) * ${itemsPerView - 1})) / ${itemsPerView})`,
                  }}
                >
                  <BlogCard {...toBlogCardProps(p)} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Side arrows */}
          <div className="pointer-events-none">
            <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
              <button
                aria-label="Previous"
                onClick={goPrev}
                disabled={!canPrev}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-md backdrop-blur focus:outline-none focus-visible:ring-2 disabled:opacity-40"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--surface-card)',
                  color: 'var(--text-primary)',
                }}
              >
                <span className="text-2xl leading-none font-extrabold">&lt;</span>
              </button>
            </div>
            <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
              <button
                aria-label="Next"
                onClick={goNext}
                disabled={!canNext}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-md backdrop-blur focus:outline-none focus-visible:ring-2 disabled:opacity-40"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--surface-card)',
                  color: 'var(--text-primary)',
                }}
              >
                <span className="text-2xl leading-none font-extrabold">&gt;</span>
              </button>
            </div>
          </div>

          {/* Dots that cycle every 3 cards */}
          {(() => {
            const dotsCount = 3;
            const activeDotIndex = index % 3;
            return (
              <div
                className="mt-4 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Slide indicators"
              >
                {Array.from({ length: dotsCount }, (_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={activeDotIndex === i}
                    aria-label={`Go to slide ${i + 1} in current group`}
                    onClick={() => {
                      const currentGroup = Math.floor(index / 3);
                      const newIndex = currentGroup * 3 + i;
                      setIndex(Math.min(newIndex, maxIndex));
                    }}
                    className="h-2.5 w-2.5 rounded-full border"
                    style={{
                      backgroundColor:
                        activeDotIndex === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                      borderColor:
                        activeDotIndex === i ? 'var(--border-strong)' : 'var(--border-subtle)',
                    }}
                  />
                ))}
              </div>
            );
          })()}
        </div>
      )}
    </motion.section>
  );
}
