import { regionFilter } from '@/fields/regionFilter'
import { timeFilter } from '@/fields/timeFilter'

import { blockStyling } from './blockStyling'

import type { Field } from 'payload'

export const blockOptions: Field = {
  label: 'Options',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'blockOptions',
      label: false,
      type: 'group',
      interfaceName: 'BlockOptions',
      fields: [
        blockStyling,
        {
          type: 'collapsible',
          label: 'Filters',
          admin: { initCollapsed: true },
          fields: [regionFilter, timeFilter],
        },
        {
          name: 'anchorId',
          type: 'text',
          admin: {
            description:
              'Add an anchor ID to this container to link to it from another part of the page.',
          },
        },
      ],
    },
  ],
}
