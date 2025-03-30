/*import { RenderBlocks } from '@/payload/blocks/RenderBlocks'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { cache } from 'react'*/

type PageProps = {
  params: Promise<{
    slug?: string
  }>
}

/*
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}*/

export default async function Page({ params: paramsPromise }: PageProps) {
  /*const { slug = 'home' } = await paramsPromise

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return <>Not found</>
  }

  return <RenderBlocks blocks={page.layout} />*/

  return <>Not found {JSON.stringify(paramsPromise, null, 2)}</>
}

/*
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})*/
