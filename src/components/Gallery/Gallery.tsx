import { client } from "@/app/lib/sanity"
import styles from './gallery.module.css'
import { galleryImageTypes } from "@/app/lib/interface";
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../NextJsImage/NextJsImage";

async function getImages(gallery:string) {
    const query = `
    *[_type == 'galleryimage' && gallery == '${gallery}']|order(_createdAt asc){
        title,
        "currentSlug": slug.current,
        "src": image.asset->url,
        "alt": alt
    }`;

      const data = await client.fetch(query)
      return data
}

type GalleryProps = {
    gallery:string
}

export default async function Gallery({ gallery }:GalleryProps) {
    const data: galleryImageTypes[] = await getImages(gallery);
    const imgArr = data.map(element => element.image)
    console.log(data)
    return (
            <section className={styles.galleryWrapper}>
                <div className={styles.galleryContainer}></div>
                <div className={styles.innerWrapper}>
                {data.map((img, idx) => (
                    <div key={ idx } className={styles.imgWrapper}>
                        <Image     
                            src={ img.src } 
                            alt="test" 
                            fill={true} 
                            sizes="(max-width:768px) 200px, 300px"
                            className={styles.thumbnail}
                        />
                    </div>
                ))}
                </div>
            </section>
    )
}