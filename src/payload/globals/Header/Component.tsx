import type { Header } from '@/payload-types'
import { getCachedGlobal } from '@/payload/utils/getGlobals'
// import { HeaderClient } from './Component.client'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)

  return <pre>{JSON.stringify(headerData, null, 2)}</pre>

  {
    /* return <HeaderClient data={headerData} /> */
  }
}
