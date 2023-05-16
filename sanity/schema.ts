import { type SchemaTypeDefinition } from 'sanity'
import coach from './schemas/coach-schema'
import carouselPics from './schemas/carouselPics-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [coach, carouselPics],
}
