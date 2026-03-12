import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Innovation from '@/components/Innovation'
import MarketStats from '@/components/MarketStats'
import Konfigurator from '@/components/Konfigurator'
import WhyKnakke from '@/components/WhyKnakke'
import Branchen from '@/components/Branchen'
import Werbeartikel from '@/components/Werbeartikel'
import Auszeichnungen from '@/components/Auszeichnungen'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Innovation />
      <MarketStats />
      <Konfigurator />
      <WhyKnakke />
      <Branchen />
      <Werbeartikel />
      <Auszeichnungen />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
