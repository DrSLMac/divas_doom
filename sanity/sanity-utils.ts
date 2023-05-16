import { groq } from "next-sanity"
import { client } from "./lib/client"
import { Coach } from "@/types/Coach"
import { CarouselPics } from "@/types/CarouselPics"

export async function getCoaches(): Promise<Coach[]> {
    return client.fetch(
        groq`*[_type == "coach"]{
            _id,
            _createdAt,
            id,
            name,
            "slug": slug.current,
            title,
            "image": image.asset->url,
            content
        }`
    )};

export async function getCoach(slug: string): Promise<Coach> {
    return client.fetch(
        groq`*[_type == "coach" && slug.current == $slug][0]{
            _id,
            _createdAt,
            id,
            name,
            "slug": slug.current,
            title,
            "image": image.asset->url,
            content
        }`,
        { slug }
    )};

export async function getCarouselPics(): Promise<CarouselPics[]> {
    return client.fetch(
        groq`*[_type == "carouselPics"]{
            _id,
            _createdAt,
            id,
            "image": image.asset->url,
        }`
    )
}