'use client'
import { Tab } from '@headlessui/react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import CloudImage from '@/components/CloudinaryImage/CloudImage'

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import { useRef } from 'react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

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

interface CloudinaryData {
    public_id: string,
    secure_url: string,
}

export default function Gallery(data:object) {
    const lightboxRef = useRef<LightGallery | null>(null)
    const wildlife = data.data.resources.filter(function (el) {
        return el.folder == "wildlife";
    })
    const dogs = data.data.resources.filter(function (el) {
        return el.folder == "dogs";
    })
    const cats = data.data.resources.filter(function (el) {
        return el.folder == "cats";
    })
    const people = data.data.resources.filter(function (el) {
        return el.folder == "people";
    })

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
                                    <Masonry breakpointCols={4} className="flex items-start justify-around " columnClassName="">
                                        {data.data.resources.map((image:any, idx:number) => (
                                        <CloudImage
                                            key={idx}
                                            src={image.secure_url}
                                            alt={image.alt}
                                            width="300"
                                            height="300"
                                            className="hover:opacity-70 rounded-lg transition ease-in-out duration-300 my-6 cursor-pointer"
                                            onClick={() => {
                                                lightboxRef.current?.openGallery(idx);
                                            }}
                                        />
                                        ))}
                                    </Masonry>

                                    <LightGalleryComponent
                                        onInit={(ref) => {
                                            if (ref) {
                                                lightboxRef.current = ref.instance
                                            }
                                        }}
                                        speed={500}
                                        plugins={[lgThumbnail, lgZoom]}
                                        dynamic
                                        dynamicEl={data.data.resources.map(image => ({
                                            src: image.secure_url,
                                            thumb: image.secure_url,
                                        })
                                    )}
                                    >

                                    </LightGalleryComponent>
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
