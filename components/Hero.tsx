'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const SLIDES = [
  {
    eyebrow: 'Industrial Grade',
    title: 'Powering\nIndustry Forward',
    subtitle:
      'High-performance rotary switches engineered to handle the toughest electrical demands — from control panels to heavy machinery.',
    cta: { label: 'Explore Products', href: '#products' },
    bg: 'from-gray-950 via-gray-900 to-slate-900',
    accentBg: 'bg-amber-500/10',
    accent: 'text-amber-400',
    badge: 'Trusted by 500+ engineers',
    pattern: 'grid',
  },
  {
    eyebrow: 'Precision Engineered',
    title: 'Machined to\nExacting Tolerances',
    subtitle:
      'Each switch is crafted with aircraft-grade components, tested across 2 million cycles and certified to IEC 60947-3 standards.',
    cta: { label: 'See Certifications', href: '#about' },
    bg: 'from-slate-950 via-slate-900 to-gray-950',
    accentBg: 'bg-orange-500/10',
    accent: 'text-orange-400',
    badge: 'IEC 60947-3 Certified',
    pattern: 'dots',
  },
  {
    eyebrow: 'Built to Last',
    title: 'Reliability You\nCan Count On',
    subtitle:
      'Rated for 2 000 000+ switching cycles. Our rotary switches protect critical infrastructure with zero compromise on safety or performance.',
    cta: { label: 'Get a Quote', href: '#contact' },
    bg: 'from-gray-950 via-slate-950 to-gray-900',
    accentBg: 'bg-yellow-500/10',
    accent: 'text-yellow-400',
    badge: '2M+ cycles rated',
    pattern: 'lines',
  },
]

/* Background pattern SVGs */
function Pattern({ type }: { type: string }) {
  if (type === 'dots')
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    )
  if (type === 'lines')
    return (
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40 L40 0" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>
    )
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

/* Individual animated slide */
function Slide({
  slide,
  index,
  scrollYProgress,
}: {
  slide: (typeof SLIDES)[0]
  index: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const total = SLIDES.length
  // Each slide occupies 1/total of the scroll range for its entrance
  const enterStart = index === 0 ? 0 : (index - 0.8) / total
  const enterEnd = index === 0 ? 0 : index / total

  // Exit: current slide scales/fades as next enters
  const exitStart = index / total
  const exitEnd = (index + 0.85) / total

  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [enterStart, enterEnd],
    index === 0 ? ['0%', '0%'] : ['100%', '0%'],
  )
  const scale = useTransform(
    scrollYProgress,
    index < total - 1 ? [exitStart, exitEnd] : [0, 1],
    index < total - 1 ? [1, 0.92] : [1, 1],
  )
  const opacity = useTransform(
    scrollYProgress,
    index < total - 1 ? [exitStart, exitEnd] : [0, 1],
    index < total - 1 ? [1, 0] : [1, 1],
  )

  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${slide.bg} overflow-hidden`}
      style={{ y, scale, opacity, zIndex: index }}
    >
      <Pattern type={slide.pattern} />

      {/* Glow blob */}
      <div
        className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl ${slide.accentBg}`}
      />
      <div
        className={`absolute -bottom-60 -left-20 w-[500px] h-[500px] rounded-full blur-3xl ${slide.accentBg} opacity-50`}
      />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-widest uppercase ${slide.accent} mb-6`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {slide.badge}
          </div>

          {/* Eyebrow */}
          <p className={`text-sm font-semibold uppercase tracking-widest ${slide.accent} mb-3`}>
            {slide.eyebrow}
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tight mb-6 whitespace-pre-line">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
            {slide.subtitle}
          </p>

          {/* CTA */}
          <Link
            href={slide.cta.href}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-gray-950 bg-amber-500 hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 hover:-translate-y-0.5`}
          >
            {slide.cta.label}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-10 right-6 flex flex-col items-center gap-3">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`block w-0.5 transition-all duration-300 ${
                i === index ? 'h-8 bg-amber-400' : 'h-3 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    /* Container height = slides × 100vh so scroll locks here until all slides pass */
    <section
      ref={containerRef}
      id="hero"
      className="hero-wrapper relative"
      style={{ height: `${SLIDES.length * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {SLIDES.map((slide, i) => (
          <Slide key={i} slide={slide} index={i} scrollYProgress={scrollYProgress} />
        ))}

        {/* Scroll hint — fades out quickly */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]) }}
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
