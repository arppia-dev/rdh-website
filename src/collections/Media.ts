import type { CollectionConfig, Field } from 'payload'

const fields: Field[] = [
  {
    name: 'alt',
    type: 'text',
    required: true,
  },
]

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: true,
  fields,
}
