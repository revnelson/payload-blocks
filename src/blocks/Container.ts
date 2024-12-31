import { richTextField } from '@/fields/richText'

import { HeroBlocks } from './Hero'

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
      blocks: HeroBlocks,
    },
    blockOptions,
  ],
})

const indexedArray = Array.from({ length: 50 }).map((_, index) => index + 1)

export const ContainerBlocks = indexedArray.map((_, index) => Container(index))
