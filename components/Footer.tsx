import Link from 'next/link'
import { Zap, Twitter, Linkedin, Youtube } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/8">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <Link href="#" className="flex items-center gap-2 w-fit">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500">
              <Zap className="w-5 h-5 text-gray-950" strokeWidth={2.5} />
            </span>
            <span className="text-white font-bold text-xl tracking-tight">
              Rotary<span className="text-amber-400">Pro</span>
            </span>
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
