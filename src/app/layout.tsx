import type { Metadata } from 'next'
import '../styles/index.css'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'MAQUIPRO - Maquinaria Pesada de Alto Rendimiento',
  description:
    'Distribuimos maquinaria amarilla y pesada de primera calidad: excavadoras, bulldozers, motoniveladoras y más. Respaldo técnico completo en toda Latinoamérica.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
