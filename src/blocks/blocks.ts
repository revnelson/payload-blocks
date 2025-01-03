import { generateContainerBlocks } from './Container'
import { generateHeroBlocks } from './Hero'

import type { Block } from 'payload'

export const generateBlocks = (blockCount: number, containerCount?: number): Block[] => [
  ...generateHeroBlocks(blockCount),
  ...(containerCount && containerCount > 0 ? generateContainerBlocks(containerCount) : []),
]
