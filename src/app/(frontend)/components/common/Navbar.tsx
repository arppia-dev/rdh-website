import { Nav, Page } from '@/payload-types'
import configPromise from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'

export default async function Navbar() {
  const payload = await getPayload({ config: configPromise })

  const { items } = await payload.findGlobal({
    slug: 'nav',
  })

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {items.map((item: { page: string | Page; id?: string | null }) => (
        <div
          key={item.id}
          className="relative flex cursor-pointer items-center gap-1 hover:text-amber-200"
        >
          <Link href={typeof item.page !== 'string' ? `${item.page.slug}` : item.page}>
            {typeof item.page !== 'string' ? item.page.title : item.page}
          </Link>

          {/* {item.page === 'Inicio' && (
            <div className="absolute top-full left-0 h-0.5 w-full bg-white"></div>
          )} */}
        </div>
      ))}
    </nav>
  )
}
