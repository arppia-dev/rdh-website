'use client'

import type { Header } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="relative z-20 container">
      <div className="flex justify-between py-8">
        <Link href="/">
          {/* <Logo loading="eager" priority="high" className="invert dark:invert-0" /> */}
          Logo
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
