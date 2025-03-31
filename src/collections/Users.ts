import type { CollectionConfig, Field } from 'payload'

const fields: Field[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    required: true,
  },
]

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields,
}
