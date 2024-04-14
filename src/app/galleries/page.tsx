import { v2 as cloudinary } from 'cloudinary';
import Gallery from '@/components/Gallery/Gallery'

cloudinary.config({
    cloud_name: "dnwoj84ay",
    api_key: process.env.CLOUDINARY_API_KEY,
    secure: true,
});

export default async function GalleryPage() {
    const data:object = (await cloudinary.search.expression('resource_type:image').execute())
    return(
        <Gallery data = {data} />
    )
}