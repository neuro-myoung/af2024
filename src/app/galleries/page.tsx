'use client'
import { Tab } from '@headlessui/react'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import LightGallery from 'lightgallery/react'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

const tabs = [
    {
        key: 'wildlife',
        display: 'Wildlife'
    },
    {
        key: 'dogs',
        display: 'Dogs'
    },
    {
        key: 'cats',
        display: 'Cats'
    },
    {
        key: 'people',
        display: 'People'
    },
]

import img1 from "../../../public/galleryScroll/AlixFuerst_Macaws.jpg";
import img2 from "../../../public/galleryScroll/AlixFuerst_LexiandLily.jpg";
import img3 from "../../../public/galleryScroll/Ev.jpeg";
import img4 from "../../../public/galleryScroll/bee.jpg";
import img5 from "../../../public/galleryScroll/Owl3.jpeg";
import img6 from "../../../public/galleryScroll/lion.jpeg";
import img7 from "../../../public/galleryScroll/wedding.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7]

export default function Galleries() {
    return (
        <div className="h-full w-screen min-h-screen overflow-auto pt-[4rem]">
            <main className="py-32 bg-[#f2f2f2]">
                <div className="flex flex-col items-center px-10">
                    <Tab.Group>
                        <Tab.List className="flex items-center gap-16 my-10">
                            {tabs.map(tab => (
                                <Tab key={tab.key} className="p-2 text-5xl">
                                    {({ selected }) => (
                                        <span className={selected ? "text-white" : "text-stone-600"}>
                                            {tab.display}
                                        </span>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>
                        <div className="relative h-full max-w-[1600px] w-full before:content-[''] before:absolute before:w-[100%] before:h-[20px] before:l-0 before:t-0 before:border-l-2 before:border-r-2 before:border-t-2 before:border-[#0e0008] after:content-[''] after:absolute after:w-[100%] after:h-[20px] after:r-0 after:b-100 after:border-l-2 after:border-r-2 after:border-b-2 after:border-[#0e0008]">
                            <Tab.Panels className="h-full w-full">
                                <Tab.Panel className="p-2 sm:p-6">
                                    <Masonry breakpointCols={3} className="flex items-start justify-center gap-5" columnClassName="">
                                        {images.map(image => (<Image
                                            key={image.src}
                                            src={image}
                                            alt="test"
                                            className="group-hover:scale-105 transition ease-in-out duration-300 my-5 pointer"
                                            placeholder="blur"
                                        />
                                        ))}
                                    </Masonry>
                                </Tab.Panel>
                                <Tab.Panel>Content 2</Tab.Panel>
                                <Tab.Panel>Content 3</Tab.Panel>
                                <Tab.Panel>Content 4</Tab.Panel>
                            </Tab.Panels>
                        </div>
                    </Tab.Group>
                </div>

            </main>
        </div>
    );
}
