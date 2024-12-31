import { ContainerBlocks } from './Container'
import { HeroBlocks } from './Hero'

import type { Block } from 'payload'

export const blocks: Block[] = [...HeroBlocks, ...ContainerBlocks]
