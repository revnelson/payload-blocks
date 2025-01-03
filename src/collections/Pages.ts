import { generateBlocks } from '@/blocks'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      blocks: generateBlocks(50, 25),
    },
  ],
}
