'use client'

import type { Header as HeaderType, Page } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center gap-3">
      {navItems.map((item: { page: string | Page; id?: string | null }) => (
        <div
          key={item.id}
          className="relative flex cursor-pointer items-center gap-1 text-white hover:text-amber-200"
        >
          <Link
            href={
              typeof item.page !== 'string'
                ? item.page.slug === 'home'
                  ? '/'
                  : `/${item.page.slug}`
                : item.page
            }
          >
            {typeof item.page !== 'string' ? item.page.title : undefined}
          </Link>
        </div>
      ))}
    </nav>
  )
}
