import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Products from '@/components/Products'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Products start={1} limit={3} />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
