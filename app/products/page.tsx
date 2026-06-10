'use client'

import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Products from '@/components/Products'

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <Products start={0} limit={5} />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}