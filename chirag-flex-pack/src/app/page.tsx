import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductsSection from '@/components/ProductsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
