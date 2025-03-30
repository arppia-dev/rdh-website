// import { HeaderClient } from './Component.client'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function Header() {
  // const headerData: Header = await getCachedGlobal('header', 1)
  const payload = await getPayload({ config: configPromise })

  const headerData = await payload.findGlobal({
    slug: 'header',
    depth: 1,
  })

  return <pre>{JSON.stringify(headerData, null, 2)}</pre>

  {
    /* return <HeaderClient data={headerData} /> */
  }
}
