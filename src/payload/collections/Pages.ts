import type { CollectionConfig } from 'payload'

import { generateSlug } from '../utils/generateSlug'
import { Hero } from '../blocks/Hero/config'
import { Content } from '../blocks/Content/config'

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
      blocks: [Hero, Content],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          if (data.title) {
            data.slug = data.title === 'Inicio' ? 'home' : generateSlug(data.title)
          }
        }
        return data
      },
    ],
  },
}
