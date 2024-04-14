import { cloudinary } from '../../../cloudinary.config'

interface CloudinaryResource {
    public_id: string;
    secure_url: string;
    folder: string;
    alt: string;
} 

export async function getImages() {
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
    return{
        props: {
            wildife: wildlife,
            dogs: dogs,
            cats: cats,
            people: people,
        }
    }
}