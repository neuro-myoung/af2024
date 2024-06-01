'use client';
import React, { useRef, ReactNode } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const TextReveal = ({value}) => {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })

    const words = value.split(" ");

    return(
        <h1 
            className="font-normal justify-center px-[0.75rem] md:justify-start md:px-0 text-[2rem] md:text-[3rem] max-w-[1200px] flex flex-wrap relative leading-8 text-[#0e0008]"
            ref = {element}
        >
            {
                words.map( (word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key = {i} range={[start, end]} progress={scrollYProgress}>{ word }</Word>
                })
            }
        </h1>
    )
}

const Word = ({children, range, progress}) => {
    const chars = children.split("");
    const extent = range[1] - range[0];
    const step = extent/children.length;
    return (
        <span className="m-2 md:m-3 relative">
            {
                chars.map( (character, i) => {
                    const start = range[0] + (step * i)
                    const end = range[0] + (step * ( i + 1 )); 
                    return <Character 
                    key = {i}
                    range = {[start, end]}
                    progress = {progress}
                    >{character}</Character>
                })
            }
        </span>
    )
}

const Character = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0,1])
    return (
        <span>
            <span className="absolute opacity-10">{children}</span>
        <motion.span style={{opacity}}>
            {children}
        </motion.span>
        </span>
    )
}

export default TextReveal