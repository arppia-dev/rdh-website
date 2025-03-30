import React from 'react'
import './globals.css'
import { Header } from '@/payload/globals/Header/Component'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  )
}
