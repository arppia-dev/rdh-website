import { Hero } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { JSX } from 'react'

export function HeroBlock(block: Hero): JSX.Element | undefined {
  return (
    <div className="relative mb-4 bg-sky-950 bg-cover bg-center p-20 text-center text-white">
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
}
