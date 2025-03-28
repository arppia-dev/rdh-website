import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: `/${slug}`,
      },
    },
  })

  const page = docs?.[0]

  if (!page) {
    notFound()
  }

  return (
    <div>
      {page.layout!.map((block: any, index: number) => {
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
                    backgroundImage: `url("${block.image.url}")`,
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
