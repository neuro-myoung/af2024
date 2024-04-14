import { cloudinary } from '../lib/cloudinary.config'
import GallerySection from "@/components/Gallery/Gallery"

interface CloudinaryResource {
    public_id: string;
    secure_url: string;
    folder: string;
    alt: string;
} 

export default async function GalleryPage() {    
    const { resources } = await cloudinary.search.expression('resource_type:image').execute()

    const wildlife = resources.filter(function (el:CloudinaryResource) {
        return el.folder == "wildlife";
    })
    const dogs = resources.filter(function (el:CloudinaryResource) {
        return el.folder == "dogs";
    })
    const cats = resources.filter(function (el:CloudinaryResource) {
        return el.folder == "cats";
    })
    const people = resources.filter(function (el:CloudinaryResource) {
        return el.folder == "people";
    })

    const tabs = [
        {
            key: 'wildlife',
            display: 'Wildlife',
            images: wildlife,
        },
        {
            key: 'dogs',
            display: 'Dogs',
            images: dogs,
        },
        {
            key: 'cats',
            display: 'Cats',
            images: cats,
        },
        {
            key: 'people',
            display: 'People',
            images: people,
        },
    ]

    return (
        <GallerySection data={tabs} />
    );

}
