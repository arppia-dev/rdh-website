import { type Header, Page } from '@/payload-types'
import { getCachedGlobal } from '@/payload/utils/getGlobals'
import Link from 'next/link'
import { JSX } from 'react'

export async function Header(): Promise<JSX.Element | undefined> {
  const headerData: Header = await getCachedGlobal('header', 1)()
  const navItems = headerData?.navItems || []

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navItems.map((item: { page: string | Page; id?: string | null }) => (
        <div
          key={item.id}
          className="relative flex cursor-pointer items-center gap-1 hover:text-amber-200"
        >
          <Link href={typeof item.page !== 'string' ? `/pages/${item.page.slug}` : item.page}>
            {typeof item.page !== 'string' ? item.page.title : item.page}
          </Link>
        </div>
      ))}
    </nav>
  )
}
