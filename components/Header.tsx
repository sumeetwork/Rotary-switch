'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import {
  motion,
  useMotionValue, useSpring, useTransform,
  useAnimationControls, AnimatePresence,
} from 'framer-motion'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact',  href: '/contact' },
]

/* ─── Animated Logo ─────────────────────────────────────────── */
function AnimatedLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const spinControls = useAnimationControls()
  const [hovered, setHovered]   = useState(false)
  const [spinning, setSpinning] = useState(false)

  /* Magnetic cursor pull */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const tx = useSpring(mx, { stiffness: 180, damping: 18 })
  const ty = useSpring(my, { stiffness: 180, damping: 18 })

  /* 3-D tilt derived from cursor position */
  const rotateX = useTransform(ty, [-25, 25], [14, -14])
  const rotateY = useTransform(tx, [-25, 25], [-14, 14])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mx.set(e.clientX - rect.left - rect.width  / 2)
    my.set(e.clientY - rect.top  - rect.height / 2)
  }
  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => { mx.set(0); my.set(0); setHovered(false) }

  /* Click → 360° spin + bounce (controls only drive spin, not entrance) */
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (spinning) return
    setSpinning(true)
    await spinControls.start({
      rotate: 360,
      scale:  [1, 1.2, 1],
      transition: { duration: 0.65, ease: 'easeInOut' },
    })
    await spinControls.start({ rotate: 0, transition: { duration: 0 } })
    setSpinning(false)
  }

  return (
    /* Outermost: handles magnetic pull */
    <motion.div
      ref={containerRef}
      style={{ x: tx, y: ty }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      className="relative cursor-pointer select-none"
    >
      {/* Spinning conic glow ring — hover only */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="ring"
            className="absolute -inset-3 rounded-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{
              rotate:  { duration: 1.8, repeat: Infinity, ease: 'linear', from: 0 },
              opacity: { duration: 0.25 },
            }}
            style={{
              background: 'conic-gradient(from 0deg, transparent 55%, #f59e0b 75%, #fef08a 88%, transparent 100%)',
              borderRadius: '50%',
            }}
          />
        )}
      </AnimatePresence>

      {/* Idle pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-amber-400/15 pointer-events-none"
        animate={{ scale: [1, 1.55, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Entrance wrapper — pure variants, no controls */}
      <motion.div
        initial={{ opacity: 0, scale: 0.35, rotate: -25 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.2 }}
        className="relative z-10"
      >
        {/* 3-D tilt + click-spin layer */}
        <motion.div
          animate={spinControls}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          {/* Amber glow intensifying on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-amber-400/30 blur-2xl pointer-events-none"
            animate={{ opacity: hovered ? 1 : 0.25, scale: hovered ? 1.6 : 1 }}
            transition={{ duration: 0.3 }}
          />

          <Image
            src="/images/ceko-logo-new.png"
            alt="Ceko logo"
            width={80}
            height={80}
            className="relative object-contain drop-shadow-[0_2px_14px_rgba(245,158,11,0.55)]"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    setActiveLink(window.location.pathname)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/30 py-2'
          : 'bg-transparent py-4',
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <AnimatedLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              {link.label}
              {/* Animated underline */}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-amber-400 transition-all duration-300',
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full',
                )}
              />
            </Link>
          ))}

          {/* CTA button with shimmer */}
          <Link href="/contact" className="relative ml-2 overflow-hidden px-5 py-2 text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 transition-colors duration-200 group">
            <span className="relative z-10">Get a Quote</span>
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
          </Link>
        </nav>

        {/* Mobile burger */}
        <motion.button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.85, rotate: 90 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile menu — slides down */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800"
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ x: -20, opacity: 0 }}
              animate={menuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: i * 0.06, duration: 0.25 }}
            >
              <Link
                href={link.href}
                className="text-gray-300 hover:text-amber-400 font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={menuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.25 }}
          >
            <Link
              href="/contact"
              className="mt-2 block px-5 py-2.5 text-sm font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}
