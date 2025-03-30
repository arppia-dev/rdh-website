import type { Header } from '@/payload-types'
// import { getCachedGlobal } from '@/payload/utils/getGlobals'
import { HeaderClient } from './Component.client'

export async function Header() {
  // const headerData: Header = await getCachedGlobal('header', 1)
  const response = await fetch('http://localhost:3000/api/globals/header')
  if (!response.ok) {
    throw new Error('Failed to fetch header data')
  }
  const headerData = await response.json()

  return <HeaderClient data={headerData} />
}
