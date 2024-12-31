import type { Field } from 'payload'
import type { Page } from '@/payload-types'

const cssField: Field = {
  name: 'css',
  label: 'Custom CSS',
  type: 'code',
  admin: {
    language: 'css',
    description:
      'Must be applied to a single class (any name). Example: .cool-stuff {color: "red", background-color: "black"}',
  },
}

export const blockStyling: Field = {
  type: 'collapsible',
  label: 'Styling',
  admin: { initCollapsed: true },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'margin',
          type: 'select',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
        },
        {
          name: 'padding',
          type: 'select',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
          defaultValue: 'md',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'bg',
          label: 'Background',
          type: 'select',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Standard', value: 'standard' },
            { label: 'Inverted', value: 'inverted' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'text',
          type: 'select',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Standard', value: 'standard' },
            { label: 'Inverted', value: 'inverted' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
          defaultValue: 'default',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'breakout', type: 'checkbox' },
        { name: 'fullWidth', type: 'checkbox' },
      ],
      admin: {
        condition: (data: Partial<Page>, siblingData) => {
          // Hide if not a root block or not in pages

          if ('sections' in data) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const rootBlocks = (data.sections as any[])?.map((section) => section?.id)

            const blockId = siblingData?.id

            return !!rootBlocks?.includes(blockId)
          }

          return false
        },
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'showAt',
          type: 'select',
          options: [
            { label: 'All', value: 'all' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
        },
        {
          name: 'hideAt',
          type: 'select',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
        },
      ],
    },
    cssField,
  ],
}
