import { type SchemaTypeDefinition } from 'sanity'
import coach from './schemas/coach-schema'
import social from './schemas/social-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [coach, social],
}
