'use client'

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { WhatsAppFloat } from '../../components/WhatsAppFloat'
import { EducationCenter } from '../../components/EducationCenter'

export default function EducationCenterPage() {
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }}>
      <Navbar />
      <EducationCenter />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
