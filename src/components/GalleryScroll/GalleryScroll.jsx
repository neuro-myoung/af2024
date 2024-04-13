'use client';
import { useEffect, useRef } from 'react';
import styles from './galleryscroll.module.css'
import Image from 'next/image';
import useDimension from '@/app/useDimension';
import {useTransform, useScroll, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import TextReveal from '@/components/TextReveal/TextReveal'

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

const txt = "I am especially drawn to nature, and strive to capture the tiny details and unique character of every subject I draw."



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
        <main className={styles.main}>
          <div className={styles.statement}>
            <TextReveal value={txt}/>
          </div>
        <div className={styles.spacer}></div>
        <div ref={container} className={styles.scrollGallery}>
            <div className={styles.galleryWrapper}>
            <Column images={[images[0], images[1], images[2], images[3]]} y={y}/>
            <Column images={[images[4], images[5], images[6], , images[7]]} y={y2}/>
            <Column images={[images[8], images[9], images[10], images[11]]} y={y3}/>
            <Column images={[images[12], images[13], images[14], images[15]]} y={y4}/>
            </div>
        </div>
        <div className={styles.spacer}></div>
        </main>
    ) 
}


const Column = ({images, y=0}) => {
  return (
    <motion.div style={{y}} className={styles.column}>
      {
        images.map( (src, i) => {
          return (
          <div key={i} className={styles.imgWrapper}>
            <Image 
              src={`/static/images/galleryScroll/${src}`}
              alt='image'
              className='img'
              fill
              style={{objectFit:"cover"}}
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
            />
          </div>
        )}
    )}
    </motion.div>
  )
}