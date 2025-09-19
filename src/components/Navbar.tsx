'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDownIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
// Helper to render product logos in the dropdown just like Products page
const makeLogoIcon = (src: string, alt: string) => {
  const Icon = ({ className }: { className?: string }) => (
    <Image src={src} alt={alt} width={20} height={20} className={className ?? ''} />
  );
  Icon.displayName = `ProductLogo(${alt})`;
  return Icon;
};

type NavItem =
  | { label: string; href: string }
  | { label: string; children: Array<{ label: string; href: string }> };

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#why' },
  { label: 'Blog', href: '/#blog' },
  {
    label: 'Our Products',
    children: [
      { label: 'Metadata Browser', href: '/products/metadata-browser' },
      { label: 'HTML To PDF Converter', href: '/products/html-to-pdf' },
      { label: 'Data Mask for Dataverse', href: '/products/data-mask' },
      { label: 'Commission 365', href: '/products/commission-365' },
      { label: 'AI Autocloser', href: '/products/ai-autocloser' },
      { label: 'Flow Monitor', href: '/products/flow-monitor' },
    ],
  },
  { label: 'Contact', href: '/#contact' },
];

const productCatalog = [
  {
    category: 'Data Tools',
    items: [
      {
        label: 'Metadata Browser',
        href: '/products/metadata-browser',
        icon: makeLogoIcon('/our_products/logos/Metadata_Browser.png', 'Metadata Browser logo'),
      },
      {
        label: 'Data Mask for Dataverse',
        href: '/products/data-mask',
        icon: makeLogoIcon(
          '/our_products/logos/Data_Mask_Tool.png',
          'Data Mask for Dataverse logo',
        ),
      },
    ],
  },
  {
    category: 'AI Tools',
    items: [
      {
        label: 'AI Autocloser',
        href: '/products/ai-autocloser',
        icon: makeLogoIcon('/our_products/logos/AI_Autocloser.png', 'AI Autocloser logo'),
      },
    ],
  },
  {
    category: 'Business Tools',
    items: [
      {
        label: 'Commission 365',
        href: '/products/commission-365',
        icon: makeLogoIcon('/our_products/logos/Commission_365.png', 'Commission 365 logo'),
        badge: 'Popular',
      },
      {
        label: 'HTML To PDF Converter',
        href: '/products/html-to-pdf',
        icon: makeLogoIcon('/our_products/logos/HTML_To_PDF.png', 'HTML To PDF Converter logo'),
      },
      {
        label: 'Flow Monitor',
        href: '/products/flow-monitor',
        icon: makeLogoIcon('/our_products/logos/Flow_Monitor.png', 'Flow Monitor logo'),
      },
    ],
  },
];

// Flattened list for a simple 3x2 grid in the dropdown (no categories)
const allProducts = productCatalog.flatMap((group) => group.items);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const isDark = theme === 'dark';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-mega-open', servicesOpen ? 'true' : 'false');
  }, [servicesOpen]);

  return (
    <div className="navbar">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-4">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-base font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            <Image
              src="/image.png"
              alt="Pascalcase logo"
              className="h-7 w-7 rounded-md object-contain"
              width={28}
              height={28}
            />
            <span className="hidden sm:inline">Pascalcase</span>
          </Link>

          {/* Desktop nav (centered) */}
          <div
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
            ref={menuRef}
          >
            {navItems.map((item) => {
              const hasChildren = 'children' in item;
              return (
                <div key={item.label} className="relative">
                  {hasChildren ? (
                    <button
                      className="nav-link inline-flex items-center gap-1"
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((o) => !o)}
                    >
                      {item.label}
                      <CaretDownIcon className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link className="nav-link" href={item.href}>
                      {item.label}
                    </Link>
                  )}
                  {/* Dropdown */}
                  <AnimatePresence>
                    {hasChildren && servicesOpen && (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="products-dropdown absolute left-0 mt-2 w-[720px] max-w-[90vw] rounded-2xl p-4"
                        style={{
                          backgroundColor: isDark ? '#111827' : '#ffffff',
                          borderColor: isDark ? '#334155' : '#e2e8f0',
                          boxShadow:
                            '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.25)',
                          border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                          opacity: 1,
                          backdropFilter: 'none',
                        }}
                      >
                        <ul className="dropdown-content grid grid-cols-1 gap-4 md:grid-cols-2">
                          {allProducts.map((p) => {
                            const Icon = p.icon;
                            return (
                              <li key={p.label}>
                                <a
                                  href={p.href}
                                  className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors"
                                  style={{
                                    backgroundColor: 'transparent',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = isDark
                                      ? '#1f2937'
                                      : '#f1f5f9';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                  }}
                                  role="menuitem"
                                >
                                  <span
                                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                                    style={{
                                      backgroundColor: isDark ? '#374151' : '#f1f5f9',
                                      color: isDark ? '#e5e7eb' : '#1e293b',
                                    }}
                                  >
                                    <Icon className="h-4 w-4" aria-hidden />
                                  </span>
                                  <span className="flex min-w-0 flex-col">
                                    <span
                                      className="flex items-center gap-2 text-sm font-medium"
                                      style={{ color: isDark ? '#e5e7eb' : '#1e293b' }}
                                    >
                                      {p.label}
                                    </span>
                                    <span
                                      className="truncate text-xs"
                                      style={{ color: isDark ? '#94a3b8' : '#64748b' }}
                                    >
                                      Click to know more
                                    </span>
                                  </span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                        {/* Removed global View All Products button */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Center spacer (was search) */}
          <div className="hidden flex-1 md:block" />

          {/* Right: Theme + Profile + Mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleTheme();
                }
              }}
              aria-label="Toggle color theme"
              role="switch"
              aria-checked={mounted ? theme === 'dark' : false}
              className="theme-toggle"
            >
              <span className="sr-only">
                {mounted
                  ? theme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                  : 'Toggle color theme'}
              </span>
              {/* Icons */}
              <SunIcon
                aria-hidden
                className="absolute left-2 h-4 w-4 transition-colors"
                style={{ color: 'var(--text-primary)' }}
              />
              <MoonIcon
                aria-hidden
                className="absolute right-2 h-4 w-4 transition-colors"
                style={{
                  color: mounted
                    ? theme === 'dark'
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)'
                    : 'var(--text-secondary)',
                }}
              />
              {/* Knob */}
              <motion.span
                aria-hidden
                className="theme-toggle-knob"
                animate={{ x: mounted ? (theme === 'dark' ? 32 : 0) : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              />
            </button>

            <button
              className="nav-link md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="space-y-1 py-3">
                {navItems.map((item) => {
                  const hasChildren = 'children' in item;
                  return (
                    <div key={item.label} className="px-2">
                      {hasChildren ? (
                        <details className="group">
                          <summary className="nav-link flex cursor-pointer items-center justify-between">
                            <span>{item.label}</span>
                            <CaretDownIcon className="h-4 w-4" />
                          </summary>
                          <div className="pl-3">
                            {item.children.map((c: { label: string; href: string }) => (
                              <a key={c.label} className="nav-link block" href={c.href}>
                                {c.label}
                              </a>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <a className="nav-link block" href={item.href}>
                          {item.label}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
