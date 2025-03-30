/*import { Page } from '@/payload-types'
import configPromise from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'*/

export default async function Navbar() {
  /*const payload = await getPayload({ config: configPromise })

  const { items } = await payload.findGlobal({
    slug: 'nav',
  })*/

  return <h1>prueba</h1>
  /*
  return (


    <nav className="hidden items-center gap-8 md:flex">
      {items.map((item: { page: string | Page; id?: string | null }) => (
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
 */
}
