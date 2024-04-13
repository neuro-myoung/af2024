'use client';
import React, { useRef, ReactNode } from 'react';
import styles from './textreveal.module.css';
import { useScroll, useTransform, motion } from 'framer-motion';

const TextReveal = ({value}) => {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })

    const words = value.split(" ");

    return(
        <p 
            className={styles.revealText}
            ref = {element}
        >
            {
                words.map( (word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key = {i} range={[start, end]} progress={scrollYProgress}>{ word }</Word>
                })
            }
        </p>
    )
}

const Word = ({children, range, progress}) => {
    const chars = children.split("");
    const extent = range[1] - range[0];
    const step = extent/children.length;
    return (
        <span className={styles.word}>
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
            <span className={styles.shadow}>{children}</span>
        <motion.span style={{opacity}}>
            {children}
        </motion.span>
        </span>
    )
}

export default TextReveal