import { blocks } from '@/blocks'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      blocks,
    },
  ],
}
