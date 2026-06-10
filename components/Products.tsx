'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight, Zap, Shield, Thermometer } from 'lucide-react'
import Link from 'next/link'

const PRODUCTS = [
  {
    id: 'rs-60',
    badge: 'Lite Series',
    badgeColor: 'bg-sky-500 text-sky-200',
    name: '60 Amp Rotary Switch',
    tagline: 'Compact for light industrial control',
    description:
      'The RS-60 delivers reliable isolation and load switching in a compact form factor. Ideal for control panels, machine tools, and HVAC systems where space is at a premium.',
    image: '/images/products/60amp-switch.png',
    specs: [
      { icon: Zap,         label: 'Rated current',     value: '60 A' },
      { icon: Thermometer, label: 'Temp range',         value: '-15 °C to +40 °C' },
    ],
    features: ['4-pole version available', 'DIN rail mountable'],
    accentFrom: 'from-blue-100',
    accentTo:   'to-blue-600',
    glowColor:  'shadow-sky-100/20',
  },
  {
    id: 'rs-100-delux',
    badge: 'Delux Series',
    badgeColor: 'bg-green-200 text-green-700',
    name: '100 Amp Rotary Switch',
    tagline: 'Compact powerhouse for light industrial control',
    description:
      'The RS-100 delivers reliable isolation and load switching in a compact form factor. Ideal for control panels, machine tools, and HVAC systems where space is at a premium.',
    image: '/images/products/100amp-v1.png',
    specs: [
      { icon: Zap,         label: 'Rated current',     value: '100 A' },
      { icon: Thermometer, label: 'Temp range',         value: '-25 °C to +70 °C' },
    ],
    features: ['4-pole version available', 'DIN rail mountable'],
    accentFrom: 'from-green-400',
    accentTo:   'to-green-700',
    glowColor:  'shadow-green-500/20',
  },
  {
    id: 'rs-100-diamond',
    badge: 'Diamond Series',
    badgeColor: 'bg-sky-100 text-sky-700',
    name: '100 Amp Rotary Switch',
    tagline: 'Compact powerhouse for light industrial control',
    description:
      'The RS-100 delivers reliable isolation and load switching in a compact form factor. Ideal for control panels, machine tools, and HVAC systems where space is at a premium.',
    image: '/images/products/100amp-v1.png',
    specs: [
      { icon: Zap,         label: 'Rated current',     value: '100 A' },
      { icon: Thermometer, label: 'Temp range',         value: '-25 °C to +70 °C' },
    ],
    features: ['IEC 60947-3 compliant', '4-pole version available', 'DIN rail mountable'],
    accentFrom: 'from-sky-500',
    accentTo:   'to-blue-600',
    glowColor:  'shadow-sky-500/20',
    featured: true,
  },
  {
    id: 'rs-150',
    badge: 'Heavy Duty Series',
    badgeColor: 'bg-amber-100 text-amber-700',
    name: '150 Amp Rotary Switch',
    tagline: "The professional's choice for demanding loads",
    description:
      'Engineered for mid-range industrial applications, the RS-150 combines robust arc extinction with a tamper-proof lockable handle. A field favourite for pump control and feeder circuits.',
    image: '/images/products/100amp-v1.png',
    specs: [
      { icon: Zap,         label: 'Rated current',     value: '150 A' },
      { icon: Thermometer, label: 'Temp range',         value: '-30 °C to +80 °C' },
    ],
    features: ['Lockable handle (padlockable)', 'Short-circuit rated', '3 & 4 pole options'],
    accentFrom: 'from-amber-500',
    accentTo:   'to-orange-600',
    glowColor:  'shadow-amber-500/20',
  },
  {
    id: 'rs-200',
    badge: 'Extra Heavy Duty',
    badgeColor: 'bg-red-100 text-red-700',
    name: '200 Amp Rotary Switch',
    tagline: 'Maximum current. Uncompromising performance.',
    description:
      'Built for the harshest environments, the RS-200 handles heavy motor loads, generator transfer, and offshore applications. Double-break contacts and reinforced housing deliver maximum uptime.',
    image: '/images/products/100amp-removebg-preview.png',
    specs: [
      { icon: Zap,         label: 'Rated current',     value: '200 A' },
      { icon: Thermometer, label: 'Temp range',         value: '-40 °C to +90 °C' },
    ],
    features: ['Double-break contacts', 'Seawater resistant', 'UL 508 listed'],
    accentFrom: 'from-red-500',
    accentTo:   'to-rose-600',
    glowColor:  'shadow-red-500/20',
    price: 'From £115',
  },
]

/* Inline SVG placeholder switch illustration */
function SwitchIllustration({ uid, amps, from, to }: { uid: string; amps: number; from: string; to: string }) {
  // Use uid (unique product id) for SVG defs — prevents duplicate IDs when
  // two products share the same amp rating (e.g. two 100A variants)
  const gradId = `grad-${uid}`
  const glowId = `glow-${uid}`

  return (
    <svg
      viewBox="0 0 240 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" className={from} stopColor="currentColor" />
          <stop offset="100%" className={to} stopColor="currentColor" />
        </linearGradient>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Housing */}
      <rect x="40" y="30" width="160" height="160" rx="18" fill="#1e293b" />
      <rect x="48" y="38" width="144" height="144" rx="14" fill="#0f172a" />
      {/* Face plate ring */}
      <circle cx="120" cy="110" r="58" fill="#1e293b" />
      <circle cx="120" cy="110" r="52" fill="#0f172a" />
      {/* Gradient ring */}
      <circle
        cx="120"
        cy="110"
        r="44"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="6"
        strokeLinecap="round"
        filter={`url(#${glowId})`}
        opacity="0.9"
      />
      {/* Knob */}
      <circle cx="120" cy="110" r="28" fill="#1e293b" />
      <circle cx="120" cy="110" r="22" fill="#0f172a" />
      {/* Pointer line */}
      <line
        x1="120"
        y1="110"
        x2="120"
        y2="92"
        stroke="#f59e0b"
        strokeWidth="3"
        strokeLinecap="round"
        filter={`url(#${glowId})`}
      />
      <circle cx="120" cy="110" r="5" fill="#f59e0b" />
      {/* Amp label */}
      <text
        x="120"
        y="175"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        fill="#94a3b8"
        letterSpacing="1"
      >
        {amps}A
      </text>
      {/* Corner screws */}
      {[[58, 48], [182, 48], [58, 172], [182, 172]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#334155" />
      ))}
    </svg>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.15 },
  }),
}

export default function Products({ start = 0, limit }: { start?: number; limit?: number }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  const visibleProducts = PRODUCTS.slice(start, limit ? start + limit : undefined)

  return (
    <section id="products" ref={ref} className="bg-gray-950 py-28 md:py-36 relative overflow-hidden">
      {/* Subtle grid texture */}
      
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pgrid)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3"
          >
            Our Range
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Industrial Rotary Switches
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            Three current ratings. One quality standard. Choose the switch that matches your
            application — every model ships in 3–5 working days.
          </motion.p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visibleProducts.map((product, i) => (
            <motion.article
              key={`${product.id}-${i}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`relative flex flex-col rounded-3xl overflow-hidden border transition-transform duration-300 hover:-translate-y-2 ${
                product.featured
                  ? 'border-amber-500/40 bg-gradient-to-b from-gray-800 to-gray-900'
                  : 'border-white/8 bg-gradient-to-b from-gray-900 to-gray-950'
              }`}
            >
              {/* Featured ribbon */}
              {product.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-gray-950 tracking-wide">
                  Most Popular
                </div>
              )}

              {/* Illustration area */}
              <div className="relative h-56 flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800">
                <div className="w-44 h-44">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Glow under illustration */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full blur-2xl bg-gradient-to-r ${product.accentFrom} ${product.accentTo} opacity-30`}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-7">
                {/* Badge */}
                <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${product.badgeColor}`}>
                  {product.badge}
                </span>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-white mb-1">{product.name}</h3>
                <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${product.accentFrom} ${product.accentTo} bg-clip-text text-transparent`}>
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{product.description}</p>

                {/* Specs */}
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => {
                    const Icon = spec.icon
                    return (
                      <li key={spec.label} className="flex items-center gap-3 text-sm">
                        <Icon className="w-4 h-4 text-amber-500 shrink-0" strokeWidth={1.75} />
                        <span className="text-gray-500">{spec.label}</span>
                        <span className="ml-auto font-semibold text-gray-200">{spec.value}</span>
                      </li>
                    )
                  })}
                </ul>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((f) => (
                    <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/8">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/8">             
                  <Link
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r ${product.accentFrom} ${product.accentTo} text-white hover:opacity-90 transition-opacity shadow-lg ${product.glowColor}`}
                  >
                    Request Quote
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
