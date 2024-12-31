import { cssField } from '@/fields/css'
import { regionFilter } from '@/fields/regionFilter'
import { richTextField } from '@/fields/richText'
import { timeFilter } from '@/fields/timeFilter'

import { HeroBlocks } from './Hero'

import type { Block } from 'payload'

const Container: (index: number) => Block = (index) => ({
  slug: `Container${index}`,
  interfaceName: `Container${index}Block`,
  fields: [
    richTextField({ name: 'children' }),
    {
      name: 'blocks',
      type: 'blocks',
      blocks: HeroBlocks,
    },
    {
      label: 'Options',
      type: 'collapsible',
      admin: { initCollapsed: true },
      fields: [
        {
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
                    { label: 'None', value: 'none' },
                    { label: 'Default', value: 'default' },
                    { label: 'Inverted', value: 'inverted' },
                    { label: 'Askew', value: 'askew' },
                    { label: 'Askew Inverted', value: 'askew-inverted' },
                  ],
                },
                {
                  name: 'type',
                  type: 'select',
                  options: [
                    { label: 'Narrow', value: 'narrow' },
                    { label: 'Narrow Children', value: 'narrowChildren' },
                  ],
                },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'breakout', type: 'checkbox' },
                { name: 'fullWidth', type: 'checkbox' },
              ],
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
        },
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
})

const indexedArray = Array.from({ length: 50 }).map((_, index) => index + 1)

export const ContainerBlocks = indexedArray.map((_, index) => Container(index))
