import { RenderBlocks } from '@/payload/blocks/RenderBlocks'
import { queryPageBySlug } from '@/payload/utils/queryPageBySlug'
import { type RequiredDataFromCollectionSlug } from 'payload'

type PageProps = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = 'home' } = await paramsPromise

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return <>Not found</>
  }

  return <RenderBlocks blocks={page.layout} />
}
