import { type SchemaTypeDefinition } from 'sanity'
import coach from './schemas/coach-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [coach],
}
