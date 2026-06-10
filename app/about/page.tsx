'use client'

import Header from '@/components/Header'
import AboutUs from '@/components/AboutUs'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        
        <AboutUs isPage />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
