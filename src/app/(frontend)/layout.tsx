import { Header } from '@/globals/Header/Component'
import React from 'react'
import Footer from '../components/Footer'
import './globals.css'

export const metadata = {
  description:
    'Firma de abogados en Panamá, especializada en derecho corporativo, propiedad intelectual, litigios y arbitrajes.',
  title: 'Ríos Dixon Herrera & Asociados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
