import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic';

const ContactMap = dynamic(
  () => import('@/components/ContactMap'),
  { ssr: false }
);

function MapCode() {
  return (
    
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Where to find us</h1>

      <ContactMap />
    </section>
  );
}


export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactForm isPage />
        <MapCode />
      </main>
      <Footer />
    </>
  )
}
