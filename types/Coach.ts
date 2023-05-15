import { PortableTextBlock } from "sanity";

export type Coach = {
  _id: string,
  _createdAt: Date,
  id: number,
  name: string,
  slug: string,
  title: string,
  image: string,
  content: PortableTextBlock[]
};