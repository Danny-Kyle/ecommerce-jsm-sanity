import sanityClient from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({
    projectId: "q287amn1",
    dataset: "production",
    apiVersion: "2022-09-07",
    useCdn: true,
    token: process.env.NEXT_APP_API_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)