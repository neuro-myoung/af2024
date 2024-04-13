'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import useDimension from '@/app/useDimension';
import {useTransform, useScroll, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

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

export default function GalleryScroll() {

    const container = useRef(null);
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.0])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.1])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.6])

    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <section className="w-screen relative h-full flex flex-col items-center justify-center max-h-1080 relative before:content-[''] before:absolute before:bg-color-[#0e0008] before:h-full before:w-screen">
        <div ref={container} className="w-full">
            <div className="h-[175vh] flex justify-center relative gap-4 p-[1vw] overflow-hidden box-border [&>*:nth-of-type(1)]:top-[-30%] [&>*:nth-of-type(2)]:top-[-70%] [&>*:nth-of-type(3)]:top-[-30%] [&>*:nth-of-type(4)]:top-[-60%]">
            <Column images={[images[0], images[1], images[2], images[3]]} y={y}/>
            <Column images={[images[4], images[5], images[6], , images[7]]} y={y2}/>
            <Column images={[images[8], images[9], images[10], images[11]]} y={y3}/>
            <Column images={[images[12], images[13], images[14], images[15]]} y={y4}/>
            </div>
        </div>
        </section>
    ) 
}


const Column = ({images, y=0}) => {
  return (
    <motion.div style={{y}} className="w-[25%] h-full flex flex-col relative gap-4 max-w-[400px]">
      {
        images.map( (src, i) => {
          return (
          <div key={i} className="w-full h-full relative overflow-hidden rounded-3xl">
            <Image 
              src={`/galleryScroll/${src}`}
              alt='image'
              className='img'
              fill = {true}
              style={{objectFit:"cover"}}
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
            />
          </div>
        )}
    )}
    </motion.div>
  )
}