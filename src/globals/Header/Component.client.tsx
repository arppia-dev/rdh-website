'use client'

import Logo from '@/app/components/Logo'
import type { Header } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { HeaderNav } from './Nav'
import HeaderContact from '@/app/components/HeaderContact'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="bg-sky-950">
      <HeaderContact />
      <div className="container mx-auto flex items-center justify-between py-2">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <HeaderNav data={data} />
          <button className="z-10 bg-sky-800 px-6 py-4 font-semibold text-white hover:bg-amber-200 hover:text-sky-950">
            Obten una cita
          </button>
        </div>
      </div>
    </header>
  )
}
