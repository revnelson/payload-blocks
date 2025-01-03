import { richTextField } from '@/fields/richText'

import { generateHeroBlocks } from './Hero'

import type { Block } from 'payload'
import { blockOptions } from './blockOptions'

const Container: (index: number) => Block = (index) => ({
  slug: `Container${index}`,
  interfaceName: `Container${index}Block`,
  fields: [
    richTextField({ name: 'children' }),
    {
      name: 'blocks',
      type: 'blocks',
      blocks: generateHeroBlocks(50),
    },
    blockOptions,
  ],
})

export const generateContainerBlocks = (count: number) =>
  Array.from({ length: count }).map((_, index) => Container(index + 1))
