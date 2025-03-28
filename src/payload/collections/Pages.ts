import type { CollectionConfig } from 'payload'
import { ContentBlock } from '../blocks/ContentBlock'
import { HeroBlock } from '../blocks/HeroBlock'
import { generateSlug } from '../utils/generateSlug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
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
      unique: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBlock, ContentBlock],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          if (data.title) {
            data.slug = data.title === 'Inicio' ? '/' : generateSlug(data.title)
          }
        }
        return data
      },
    ],
  },
}
