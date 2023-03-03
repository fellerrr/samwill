import {createClient} from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
    // useCdn: process.env.NODE_ENV === "production",

export const client = createClient({
    projectId,
    dataset,
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export const urlFor = (source:any) => {
    return imageUrlBuilder(client).image(source);
};