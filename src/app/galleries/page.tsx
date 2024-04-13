'use client'
import { Tab } from '@headlessui/react'
import Masonry from 'react-masonry-css'
import Image from 'next/image'

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

const images = [
    "AlixFuerst_Macaws.jpg",
    "AlixFuerst_LexiandLily.jpg",
    "AlixFuerst_Rabbit.jpg",
    "bee.jpg",
    "Cocoafinal.jpeg",
    "Blue_Heron.jpg",
    "Ev.jpeg",
    "husky.jpg",
    "WarblerScan.jpg",
    "lion.jpeg",
    "Mouse.jpeg",
    "Owl3.jpeg",
    "RoosterPrint.tif-001.png",
    "Tortoise.jpg",
    "westie.jpg",
    "wedding.jpg"
]

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
                                    <Masonry breakpointCols={4} className="flex items-center justify-center gap-5" columnClassName="">
                                        {images.map((img, idx) => (
                                            <div key={idx} className=" my-5 group overflow-hidden cursor-pointer rounded-md">
                                                <img
                                                    src={`/galleryScroll/${img}`}
                                                    alt="test"
                                                    className="group-hover:scale-105 transition ease-in-out duration-300"
                                                />
                                            </div>
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
