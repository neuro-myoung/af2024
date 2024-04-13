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

export default function Galleries() {
    return (
        <div className="h-full w-screen min-h-screen overflow-auto">
            <main className="pt-32">
                <div className="flex flex-col items-center px-10">
                    <Tab.Group>
                        <Tab.List className="flex items-center gap-16">
                            {tabs.map(tab => (
                            <Tab key={tab.key} className="p-2 text-3xl">
                                {({ selected }) => (
                                    <span className={selected ? "text-white" : "text-stone-600"}>
                                        {tab.display}
                                    </span>
                            )}
                            </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="h-full bg-slate-600/50 max-w-[1400px] w-full p-2 sm:p-4 my-6">
                            <Tab.Panel className="">
                                <Masonry breakpointCols={3} className="flex gap-5" columnClassName="">
                                    <div className="my-5 group overflow-hidden cursor-pointer rounded-md">
                                        <img src="/husky.jpg" alt="husky" className="group-hover:scale-105 transition ease-in-out duration-300"/>
                                    </div>
                                    <div className="my-5 group overflow-hidden cursor-pointer rounded-md">
                                        <img src="/husky.jpg" alt="husky" className="group-hover:scale-105 transition ease-in-out duration-300"/>
                                    </div>
                                    <div className="my-5 group overflow-hidden cursor-pointer rounded-md">
                                        <img src="/husky.jpg" alt="husky" className="group-hover:scale-105 transition ease-in-out duration-300"/>
                                    </div>
                                    <div className="my-5 group overflow-hidden cursor-pointer rounded-md">
                                        <img src="/husky.jpg" alt="husky" className="group-hover:scale-105 transition ease-in-out duration-300"/>
                                    </div>
                                    <div className="my-5 group overflow-hidden cursor-pointer rounded-md">
                                        <img src="/husky.jpg" alt="husky" className="group-hover:scale-105 transition ease-in-out duration-300"/>
                                    </div>
                                    <div className="my-5 group overflow-hidden cursor-pointer rounded-md">
                                        <img src="/husky.jpg" alt="husky" className="group-hover:scale-105 transition ease-in-out duration-300"/>
                                    </div>
                                    <div className="my-5 group overflow-hidden cursor-pointer rounded-md">
                                        <img src="/husky.jpg" alt="husky" className="group-hover:scale-105 transition ease-in-out duration-300"/>
                                    </div>
                                    <div className="my-5 group overflow-hidden cursor-pointer rounded-md">
                                        <img src="/husky.jpg" alt="husky" className="group-hover:scale-105 transition ease-in-out duration-300"/>
                                    </div>
                                </Masonry>
                            </Tab.Panel>
                            <Tab.Panel>Content 2</Tab.Panel>
                            <Tab.Panel>Content 3</Tab.Panel>
                            <Tab.Panel>Content 4</Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </main>
        </div>
    );
}
