import type { Field } from 'payload'

export const cssField: Field = {
  name: 'css',
  label: 'Custom CSS',
  type: 'code',
  admin: {
    language: 'css',
    description:
      'Must be applied to a single class (any name). Example: .cool-stuff {color: "red", background-color: "black"}',
  },
}
