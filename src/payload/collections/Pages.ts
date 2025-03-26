import type { CollectionConfig } from 'payload'
import { Content } from '../blocks/Content'
import { Hero } from '../blocks/Hero'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Hero, Content],
    },
  ],
}
