'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function TermsOfSale() {

  const sectionRef = useRef<HTMLElement>(null)

  return(
    <>
    <section
      id="terms"
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-28 md:py-36"
    >
    <div className="container mx-auto px-4 py-8 aboutus-content"></div>

        <div className="max-w-7xl mx-auto px-6 terms-policy">
            <h1>Terms of Sale</h1>
            <p>
                These Terms of Sale govern all quotations, orders, purchases, and sales of products
                supplied by <strong>Ceko Products Corporation</strong>.
            </p>
            <h2>1. Scope</h2>
            <p>
                These terms apply to all sales of electrical rotary switches and related products
                unless otherwise agreed in writing.
            </p>
            <h2>2. Quotations and Orders</h2>
            <ul>
                <li>All quotations are subject to change without prior notice.</li>
                <li>An order shall become binding only upon written acceptance by Ceko Products Corporation.</li>
                <li>Specifications, dimensions, and technical details are subject to reasonable manufacturing tolerances.</li>
            </ul>
            <h2>3. Pricing</h2>
            <ul>
                <li>Prices are quoted in Indian Rupees (INR) unless otherwise stated.</li>
                <li>Applicable taxes, duties, freight, insurance, and other charges may be added separately.</li>
                <li>Pricing errors may be corrected at any time before shipment.</li>
            </ul>
            <h2>4. Payment Terms</h2>
            <ul>
                <li>Payment terms shall be as specified in the quotation or invoice.</li>
                <li>Ceko Products Corporation reserves the right to require advance payment for certain orders.</li>
                <li>Late payments may be subject to interest charges as permitted by applicable law.</li>
            </ul>
            <h2>5. Delivery and Shipping</h2>
            <ul>
                <li>Delivery schedules are estimates and not guaranteed.</li>
                <li>Risk of loss passes to the customer upon dispatch or delivery, as applicable.</li>
                <li>Delays caused by transportation providers, force majeure events, or circumstances beyond our control shall not constitute a breach of contract.</li>
            </ul>
            <h2>6. Inspection and Acceptance</h2>
            <p>
                Customers must inspect products upon receipt and notify us of any defects,
                shortages, or damage within seven (7) days of delivery.
            </p>
            <h2>7. Returns</h2>
            <ul>
                <li>Returns require prior written authorization.</li>
                <li>Custom-made, modified, or specially manufactured products may not be eligible for return.</li>
                <li>Approved returns must be shipped in original condition and packaging.</li>
            </ul>
            <h2>8. Warranty</h2>
            <p>
                Ceko Products Corporation warrants that its products will be free from defects in
                materials and workmanship under normal use and service for the warranty period
                specified in the applicable product documentation.
            </p>
            <p>
                This warranty does not cover damage resulting from improper installation, misuse,
                modification, neglect, accident, or unauthorized repairs.
            </p>
            <h2>9. Limitation of Liability</h2>
            <p>
                To the maximum extent permitted by law, Ceko Products Corporation shall not be liable
                for indirect, incidental, special, consequential, or punitive damages arising from
                the use or sale of its products.
            </p>
            <h2>10. Force Majeure</h2>
            <p>
                We shall not be liable for delays or failures caused by events beyond our reasonable
                control, including natural disasters, government actions, labor disputes, supply chain
                disruptions, or transportation interruptions.
            </p>
            <h2>11. Intellectual Property</h2>
            <p>
                All drawings, specifications, technical documents, trademarks, and related materials
                remain the property of Ceko Products Corporation unless otherwise agreed in writing.
            </p>
            <h2>12. Governing Law</h2>
            <p>
                These Terms of Sale shall be governed by and construed in accordance with the laws of
                India. Any disputes arising from these terms shall be subject to the exclusive
                jurisdiction of the courts located in Delhi, India.
            </p>
            <h2>13. Contact Information</h2>
            <p>
                <strong>Ceko Products Corporation</strong><br/>
                Delhi, India<br/>
                Email: info@cekoproducts.in
            </p>
        </div>
    </section>
    </>
  )
}
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
      <TermsOfSale />
      </main>
      <Footer />
    </>
  )
}
