'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Award, Factory, Headphones, Microscope, Drill, Users, Blocks } from 'lucide-react'

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
    hover: 'hover:bg-amber-50 hover:border-amber-200',
    iconBg: 'bg-amber-100 group-hover:bg-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    icon: Factory,
    title: 'In-House Manufacturing',
    body: 'Vertically integrated production in our facility means tighter tolerances, faster lead times, and full traceability.',
    hover: 'hover:bg-sky-50 hover:border-sky-200',
    iconBg: 'bg-sky-100 group-hover:bg-sky-200',
    iconColor: 'text-sky-600',
  },
  {
    icon: Award,
    title: '60 Years of Industrial Excellence',
    body: 'Founded in New Delhi in 1964, Ceko Products Corporation has been a cornerstone of India\'s electrical manufacturing industry. Our engineering heritage and commitment to quality set us apart.',
    hover: 'hover:bg-purple-50 hover:border-purple-200',
    iconBg: 'bg-purple-100 group-hover:bg-purple-200',
    iconColor: 'text-purple-600',
  },
  {
    icon: Headphones,
    title: 'Engineering Support',
    body: 'Dedicated application engineers available for custom specifications, CAD drawings, and on-site commissioning support worldwide.',
    hover: 'hover:bg-green-50 hover:border-green-200',
    iconBg: 'bg-green-100 group-hover:bg-green-200',
    iconColor: 'text-green-600',
  },
  {
    icon: Microscope,
    title: 'Uncompromising Quality',
    body: 'Every switch undergoes rigorous testing — thermal cycling, load endurance, and IP rating verification — before it leaves our facility.',
    hover: 'hover:bg-rose-50 hover:border-rose-200',
    iconBg: 'bg-rose-100 group-hover:bg-rose-200',
    iconColor: 'text-rose-600',
  },
  {
    icon: Drill,
    title: 'Made in India',
    body: 'Proudly designed and manufactured in New Delhi. We source precision components locally and support India\'s manufacturing ecosystem.',
    hover: 'hover:bg-orange-50 hover:border-orange-200',
    iconBg: 'bg-orange-100 group-hover:bg-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    icon: Users,
    title: 'Long-term Relationships',
    body: 'We don\'t just sell switches. We build lasting partnerships with panel builders, OEMs, and electrical contractors across India.',
    hover: 'hover:bg-teal-50 hover:border-teal-200',
    iconBg: 'bg-teal-100 group-hover:bg-teal-200',
    iconColor: 'text-teal-600',
  },
  {
    icon: Blocks,
    title: 'Engineering-first Culture',
    body: 'Our team of experienced engineers continuously refines our designs to meet the evolving demands of India\'s industrial sector.',
    hover: 'hover:bg-indigo-50 hover:border-indigo-200',
    iconBg: 'bg-indigo-100 group-hover:bg-indigo-200',
    iconColor: 'text-indigo-600',
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

        {/* ── Pillars grid — 4 on homepage, all on about page ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(isPage ? PILLARS : PILLARS.slice(0, 4)).map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                custom={0.1 + i * 0.1}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className={`group p-6 rounded-2xl border border-gray-100 bg-gray-50 transition-colors duration-300 ${p.hover}`}
              >
                <span className={`flex items-center justify-center w-11 h-11 rounded-xl mb-5 transition-colors ${p.iconBg}`}>
                  <Icon className={`w-5 h-5 ${p.iconColor}`} strokeWidth={1.75} />
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
