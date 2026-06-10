'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Award, Factory, Headphones } from 'lucide-react'

const STATS = [
  { value: '60', label: 'Years of expertise' },
  { value: '200+', label: 'Clients' },
  { value: '2M+', label: 'Switches delivered' },
  { value: '99.8%', label: 'Quality assured' },
]

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Built for Every Load',
    body: 'From compact 60A switches to our flagship 200A model — Ceko\'s range covers every industrial and commercial application. We also manufacture precision Ampere and Volt meters for panel boards.',
  },
  {
    icon: Factory,
    title: 'In-House Manufacturing',
    body: 'Vertically integrated production in our facility means tighter tolerances, faster lead times, and full traceability.',
  },
  {
    icon: Award,
    title: '60 Years of Industrial Excellence',
    body: 'Founded in New Delhi in 1964, Ceko Products Corporation has been a cornerstone of India\'s electrical manufacturing industry. Our engineering heritage and commitment to quality set us apart.',
  },
  {
    icon: Headphones,
    title: 'Engineering Support',
    body: 'Dedicated application engineers available for custom specifications, CAD drawings, and on-site commissioning support worldwide.',
  },
]

/* Reusable fade-up variant */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay },
  }),
}

export default function AboutUs({ isPage = false }: { isPage?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-28 md:py-36"
    >

      {isPage && (
              <div className="container mx-auto px-4 py-8 aboutus-content">
                
              </div>
              )}

      {/* Decorative side stripe */}
      <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Top label ── */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4"
        >
          Who We Are
        </motion.p>

        {/* ── Two-column headline + body ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-20">
          {/* Left column — headline */}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
              60 Years of Switching{' '}
              <span className="text-amber-500">Excellence</span>
            </h2>

            {/* Divider */}
            <div className="mt-6 mb-8 w-16 h-1 rounded-full bg-amber-400" />

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={0.15 + i * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  <p className="text-3xl font-extrabold text-gray-950">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — body copy */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-5 text-gray-600 leading-relaxed"
          >
            <p className="text-lg">
              Founded in 1964, RotaryPro has grown from a specialist switch manufacturer into a
              trusted global partner for industrial electrical infrastructure. Our engineering team
              brings decades of hands-on experience designing solutions for power generation,
              marine, oil &amp; gas, and building automation sectors.
            </p>
            <p>
              We don&apos;t just make switches — we solve problems. Whether you need a
              high-cycle cam switch for a CNC spindle or a weatherproof isolator for offshore
              plant, our catalogue of 100 A, 150 A, and 200 A rotary switches covers the widest
              range of applications without compromise.
            </p>
            <p>
              Every product ships with full test reports, dimensional drawings, and a 5-year
              warranty. Our factory holds ISO 9001:2015 certification and undergoes annual
              third-party audits to ensure we remain best-in-class.
            </p>
          </motion.div>
        </div>

        {/* ── Four pillars grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                custom={0.1 + i * 0.1}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-amber-50 hover:border-amber-200 transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-amber-100 group-hover:bg-amber-200 mb-5 transition-colors">
                  <Icon className="w-5 h-5 text-amber-600" strokeWidth={1.75} />
                </span>
                <h3 className="font-bold text-gray-950 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </motion.div>
            )
          })}
        </div>

        {/* ── Page-only section — hidden on homepage ── */}
        {isPage && (
          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mt-20 rounded-3xl bg-gray-950 text-white p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Left — mission statement */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                Our Mission
              </p>
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5">
                Engineering trust,{' '}
                <span className="text-amber-400">one switch at a time</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Since 1964 we have believed that electrical safety should never be a compromise.
                Every component we manufacture is designed to exceed — not just meet — the
                standards that protect workers, equipment, and infrastructure worldwide.
              </p>
            </div>

            {/* Right — timeline milestones */}
            <ol className="relative border-l border-white/10 space-y-8 pl-6">
              {[
                { year: '1964', text: 'Founded in New Delhi — first rotary switch rolls off the line.' },
                { year: '1985', text: 'Expanded to heavy-duty range; first export order shipped to the Gulf.' },
                { year: '2002', text: 'Added panel meters and 200 amp switch to our product range.' },
                { year: '2024', text: '60th anniversary — 2 million switches delivered across 10 cities.' },
              ].map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[1.65rem] flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-gray-950 text-[10px] font-black">
                    ●
                  </span>
                  <p className="text-xs font-bold text-amber-400 mb-1">{m.year}</p>
                  <p className="text-sm text-gray-400">{m.text}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </div>
    </section>
  )
}
