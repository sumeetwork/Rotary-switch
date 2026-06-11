'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import * as Label from '@radix-ui/react-label'
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const PRODUCTS = ['100A Rotary Switch', '150A Rotary Switch', '200A Rotary Switch', 'Custom / Other']

const INFO = [
  { icon: MapPin, label: 'Address',   value: '29/13, Gali No.-6, Anand Parbat, Industrial Area, New Delhi – 110005, India' },
  { icon: Phone,  label: 'Phone',     value: '+91 9810923294 / +91 9891332002' },
  { icon: Mail,   label: 'Email',     value: 'info@cekoproducts.in' },
  { icon: Clock,   label: 'Hours',     value: 'Tue-Sun: 9AM - 5PM (IST)' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: d },
  }),
}

export default function ContactForm({ isPage = false }: { isPage?: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    product: '', quantity: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputCls = cn(
    'w-full rounded-xl px-4 py-3 text-sm bg-gray-900 border border-gray-700',
    'text-white placeholder-gray-500',
    'focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500',
    'transition-colors duration-200',
  )

  return (
    <section id="contact" ref={ref} className="bg-white py-28 md:py-36 relative overflow-hidden">

      {isPage && (
              <div className="container mx-auto px-4 py-8 aboutus-content">
                
              </div>
              )}

      {/* Top amber stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            Get In Touch
          </motion.p>
          <motion.h2 custom={0.08} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Request a Quote
          </motion.h2>
          <motion.p custom={0.16} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="mt-4 text-gray-500 max-w-lg mx-auto">
            Tell us about your application and we&apos;ll respond within one business day with
            pricing, lead times, and technical recommendations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── Form ── */}
          <motion.div
            custom={0.1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-gray-950 p-8 md:p-10 shadow-2xl shadow-gray-900/40">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <CheckCircle2 className="w-16 h-16 text-amber-400" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-white">Message received!</h3>
                  <p className="text-gray-400 max-w-xs">
                    Our team will review your enquiry and get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'', company:'', email:'', phone:'', product:'', quantity:'', message:'' }) }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-gray-950 transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label.Root htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Full Name <span className="text-amber-500">*</span>
                      </Label.Root>
                      <input id="name" required value={form.name} onChange={set('name')}
                        placeholder="Jane Smith" className={inputCls} />
                    </div>
                    <div className="space-y-1.5">
                      <Label.Root htmlFor="company" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Company
                      </Label.Root>
                      <input id="company" value={form.company} onChange={set('company')}
                        placeholder="Acme Industries" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label.Root htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Email <span className="text-amber-500">*</span>
                      </Label.Root>
                      <input id="email" type="email" required value={form.email} onChange={set('email')}
                        placeholder="jane@acme.com" className={inputCls} />
                    </div>
                    <div className="space-y-1.5">
                      <Label.Root htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Phone
                      </Label.Root>
                      <input id="phone" type="tel" value={form.phone} onChange={set('phone')}
                        placeholder="+44 7700 900 000" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label.Root htmlFor="product" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Product <span className="text-amber-500">*</span>
                      </Label.Root>
                      <select id="product" required value={form.product} onChange={set('product')}
                        className={cn(inputCls, 'cursor-pointer')}>
                        <option value="">Select a product…</option>
                        {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label.Root htmlFor="quantity" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Quantity
                      </Label.Root>
                      <input id="quantity" type="number" min="1" value={form.quantity} onChange={set('quantity')}
                        placeholder="e.g. 50" className={inputCls} />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label.Root htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                      Message / Specification <span className="text-amber-500">*</span>
                    </Label.Root>
                    <textarea id="message" required rows={5} value={form.message} onChange={set('message')}
                      placeholder="Describe your application, voltage, environment, mounting requirements…"
                      className={cn(inputCls, 'resize-none')} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-gray-950 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/30 hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-gray-950/30 border-t-gray-950 rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* ── Info panel ── */}
          <motion.div
            custom={0.2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-8 justify-start pt-2"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-950 mb-2">Let&apos;s talk specs</h3>
              <p className="text-gray-500 leading-relaxed">
                Our application engineers are on hand to help you select the right switch, verify
                compatibility, and prepare custom documentation for procurement.
              </p>
            </div>

            <div className="space-y-5">
              {INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-50 shrink-0">
                    <Icon className="w-5 h-5 text-amber-600" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-gray-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SLA badges */}
            <div className="mt-2 grid grid-cols-2 gap-4">
              {[
                { val: '< 1 day',  sub: 'Response time' },
                { val: '7 days',   sub: 'Standard lead time' },
                { val: '1 year',   sub: 'Product warranty' },
                { val: 'Free',     sub: 'Technical consultation' },
              ].map((b) => (
                <div key={b.sub} className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <p className="text-xl font-extrabold text-amber-500">{b.val}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{b.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
