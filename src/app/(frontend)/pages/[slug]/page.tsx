import { Content, Hero } from '@/payload-types'
import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { draftMode } from 'next/headers'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { cache } from 'react'

type Block = Hero | Content
type PageProps = {
  params: Promise<{
    slug?: string
  }>
}

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
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = 'home' } = await paramsPromise

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return <>Not found</>
  }

  return (
    <div>
      {page.layout!.map((block: Block, index: number) => {
        switch (block.blockType) {
          case 'hero':
            return (
              <div
                key={index}
                className="relative mb-4 bg-sky-950 bg-cover bg-center p-20 text-center text-white"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage:
                      typeof block.image === 'object' && block.image?.url
                        ? `url("${block.image.url}")`
                        : undefined,
                  }}
                />
                <div className="z-10">
                  <h2 className="mb-2 text-4xl font-bold capitalize">{block.title}</h2>
                  <RichText data={block.content} />
                </div>
              </div>
            )

          case 'content':
            return (
              <div key={index} className="container mx-auto px-4 py-16">
                <RichText data={block.content} />
              </div>
            )

          /* case 'imageBlock':
            return (
              <div key={index} className="my-4">
                {block.image?.url && (
                  <img
                    src={block.image.url}
                    alt={block.caption || 'Image'}
                    className="h-auto w-full rounded-lg"
                  />
                )}
                {block.caption && <p className="text-sm text-gray-500">{block.caption}</p>}
              </div>
            ) */

          default:
            return null
        }
      })}
    </div>
  )
}

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
})
