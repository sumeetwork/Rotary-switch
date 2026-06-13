'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, Twitter, Linkedin, Youtube } from 'lucide-react'
import {
  motion,
  useMotionValue, useSpring, useTransform,
  useAnimationControls, AnimatePresence,
} from 'framer-motion'

const LINKS = {
  Products: [
    { label: '100A Rotary Switch', href: '/products' },
    { label: '150A Rotary Switch', href: '/products' },
    { label: '200A Rotary Switch', href: '/products' },
    { label: 'Custom Switches',    href: '/contact' },
  ],
  Company: [
    { label: 'About Us',     href: '/about' },
    { label: 'Quality Assurance', href: '/about' },
  ],
  Support: [
    { label: 'Contact Sales',       href: '/contact' },
  ],
}

const SOCIALS = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter,  href: '#', label: 'Twitter / X' },
  { icon: Youtube,  href: '#', label: 'YouTube' },
]

const CERTS = ['CE', 'UL', 'RoHS', 'ISO 9001']

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
            width={60}
            height={60}
            className="relative object-contain drop-shadow-[0_2px_14px_rgba(245,158,11,0.55)]"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/8">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-2 flex flex-col gap-5 footer-logo">
          {/* Logo */}
        <Link href="/">
          <AnimatedLogo />
        </Link>

          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Precision-engineered rotary switches for industrial, marine, and energy applications.
            Trusted by engineers worldwide since 1964.
          </p>

          {/* Cert badges */}
          <div className="flex flex-wrap gap-2">
            {CERTS.map((c) => (
              <span key={c} className="text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 text-gray-400">
                {c}
              </span>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3 mt-1">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-gray-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">{heading}</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Ceko Products Corporation. All rights reserved. Registered in India.</p>
          <div className="flex gap-6">
            <Link href="/policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Sale</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
