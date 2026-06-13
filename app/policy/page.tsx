'use client'

import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function PrivacyPolicy() {

  const sectionRef = useRef<HTMLElement>(null)

  return(
    <>
    <section
      id="policy"
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-28 md:py-36"
    >
    <div className="container mx-auto px-4 py-8 aboutus-content"></div>
                
    
        <div className="max-w-7xl mx-auto px-6 terms-policy">
            <h1>Privacy Policy</h1>

            <p>
                At <strong>Ceko Products Corporation</strong>, we value your privacy and are committed
                to protecting the personal information you share with us. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website
                or engage with our products and services.
            </p>

            <h2>1. Information We Collect</h2>

            <p>We may collect the following types of information:</p>

            <ul>
                <li>Name, company name, and job title</li>
                <li>Email address and phone number</li>
                <li>Billing and shipping information</li>
                <li>Inquiry and quotation request details</li>
                <li>Website usage and analytics information</li>
                <li>Technical information such as IP address, browser type, and device information</li>
            </ul>

            <h2>2. How We Use Your Information</h2>

            <p>We may use your information to:</p>

            <ul>
                <li>Respond to inquiries and quotation requests</li>
                <li>Process and fulfill orders</li>
                <li>Provide customer support</li>
                <li>Improve our products, services, and website</li>
                <li>Send product updates, technical information, and business communications</li>
                <li>Comply with legal and regulatory obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>

            <p>
                We do not sell or rent your personal information to third parties. We may share
                information with trusted service providers, logistics partners, professional advisors,
                or government authorities when required by law.
            </p>

            <h2>4. Data Security</h2>

            <p>
                We implement reasonable technical and organizational measures to protect your personal
                information against unauthorized access, disclosure, alteration, or destruction.
                However, no internet transmission or electronic storage system can be guaranteed to be
                completely secure.
            </p>

            <h2>5. Cookies and Analytics</h2>

            <p>
                Our website may use cookies and analytics tools to enhance user experience and analyze
                website traffic. You may choose to disable cookies through your browser settings.
            </p>

            <h2>6. Data Retention</h2>

            <p>
                We retain personal information only for as long as necessary to fulfill business,
                legal, accounting, and regulatory requirements.
            </p>

            <h2>7. Third-Party Links</h2>

            <p>
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices or content of such external websites.
            </p>

            <h2>8. Your Rights</h2>

            <p>
                Subject to applicable laws, you may request access to, correction of, or deletion of
                your personal information by contacting us.
            </p>

            <h2>9. Changes to This Policy</h2>

            <p>
                We reserve the right to modify this Privacy Policy at any time. Updates will be posted
                on this page with a revised effective date.
            </p>

            <h2>10. Contact Us</h2>

            <p>
                For questions regarding this Privacy Policy, please contact:
            </p>

            <p>
                <strong>Ceko Products Corporation</strong><br/>
                Delhi, India<br/>
                Email: info@cekoproducts.in<br/>
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
      <PrivacyPolicy />
      </main>
      <Footer />
    </>
  )
}
