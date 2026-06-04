'use client'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Machinery } from '../components/Machinery'
import { ValueProps } from '../components/ValueProps'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { WhatsAppFloat } from '../components/WhatsAppFloat'

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Machinery />
      <ValueProps />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
