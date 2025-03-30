import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Config } from 'src/payload-types'

type Global = keyof Config['globals']

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise })

  const global = await payload.findGlobal({
    slug: 'header',
    depth,
  })

  return global
}

export const getCachedGlobal = getGlobal
