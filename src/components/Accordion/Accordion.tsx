'use client';
import { useState } from 'react'
import AccordionEntry from './AccordionEntry/AccordionEntry'

const Accordion = () => {

    const entries = [
        {
            item: "Greeting cards",
            description: "Share artwork with friends and loved ones with these vibrant greeting cards.",
            imgsrc: "/store/cards.jpg",
            alt: "photo of a little critter card pack."
        },
        {
            item: "Coaster Sets",
            description: "Unique and eye-popping coaster sets each with a curated collection of four drawings.",
            imgsrc: "/store/coasters.jpg",
            alt: "photo of a bird coaster set."
        },
        {
            item: "Prints",
            description: "High-quality prints of colored pencil drawings are the perfect addition to any home.",
            imgsrc: "/store/prints.jpg",
            alt: "photo of three example prints made from colored pencil art"
        },
        {
            item: "Original Art",
            description: "Original, one-of-a-kind, colored pencil art.",
            imgsrc: "/store/original.jpg",
            alt: "photo of an original colored pencil wildlife drawing."
        },
        {
            item: "Commission",
            description: "Work directly with me to create your own custom colored pencil portrait.",
            imgsrc: "/store/portrait.jpg",
            alt: "time lapse photo of a dog portrait."
        }
    ]

    const [open, setOpen] = useState(-1);

    const toggle = (index: number) => {
        if (open == index) {
            return setOpen(-1)
        }

        setOpen(index)
    }


    return (
        <section className="text-[#0e0008] grid grid-cols-1 justify-items-start items-center w-full pr-[20px]">
            <h1 className="pb-[3rem]">Shop for Art</h1>
            {entries.map((entry, index) => {
                return (
                    <AccordionEntry
                        key={index}
                        open={index === open}
                        title={entry.item}
                        desc={entry.description}
                        toggle={() => toggle(index)}
                        imgsrc={entry.imgsrc}
                        alt={entry.alt}
                    />
                )
            })}

        </section>
    )
}

export default Accordion
