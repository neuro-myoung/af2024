import { createClient } from "next-sanity"

export const client = createClient({
    projectId: '9c5w6n8g',
    dataset: 'production',
    apiVersion: "2024-03-27",
    useCdn: false,
});