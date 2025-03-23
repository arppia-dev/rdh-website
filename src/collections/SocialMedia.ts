import { link } from '@/payload/fields/link'
import type { CollectionConfig } from 'payload'

export const SocialMedia: CollectionConfig = {
  slug: 'social-media',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    link({
      appearances: false,
    }),
  ],
}
