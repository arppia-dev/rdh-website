import { Nav } from '@/payload-types'
import { getCachedGlobal } from '@/payload/utils/getGlobals'

export default async function Navbar() {
  const items: Nav = await getCachedGlobal('nav', 1)()

  return <h1>prueba {JSON.stringify(items, null, 2)}</h1>
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
