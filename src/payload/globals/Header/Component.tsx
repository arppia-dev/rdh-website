import type { Header } from '@/payload-types'
import { getCachedGlobal } from '../../utils/getGlobals'
import { HeaderClient } from './Component.client'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData} />
}
