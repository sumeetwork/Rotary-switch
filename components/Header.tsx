'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact',  href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500 group-hover:bg-amber-400 transition-colors">
            <Zap className="w-5 h-5 text-gray-950" strokeWidth={2.5} />
          </span>
          <span className="text-white font-bold text-xl tracking-tight">
            Rotary<span className="text-amber-400">Pro</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 px-5 py-2 text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800 px-6 pt-4 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-amber-400 font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 text-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}
