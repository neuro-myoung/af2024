import { v2 as cloudinary } from 'cloudinary';
import Gallery from '@/components/Gallery/Gallery'

cloudinary.config({
    cloud_name: "dnwoj84ay",
    api_key: process.env.CLOUDINARY_API_KEY,
    secure: true,
});

export default async function GalleryPage() {
    const data = (await cloudinary.search.expression('resource_type:image').execute())
    console.log(data.resources.secure_url)
    
    
    return(
        <Gallery data = {data} />
    )
}
