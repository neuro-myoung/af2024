import React from 'react'
import { Collapse } from "react-collapse";
import { TiMinus } from "react-icons/ti";
import { PiCaretDown } from "react-icons/pi";
import styles from './accordionentry.module.css'
import Image from 'next/image'


interface Props {
  open: boolean;
  title: string;
  desc: string;
  toggle: any;
  imgsrc: any;
  alt: string;
}

const AccordionEntry = ({open, toggle, title, desc, imgsrc, alt}: Props) => {
  console.log
  return (
    <div className={styles.entryOuter}>
        <div className={styles.entry} onClick={toggle}>
            <p className={styles.tagtext}>{title}</p>
            <div className={styles.icon}>
                {open ? <TiMinus /> : <PiCaretDown />}
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className={styles.openEntry}>
              <div>
                <Image 
                  src={imgsrc}
                  alt={alt}
                  className={styles.img}
                  style={{objectFit:"cover"}}
                  width={250}
                  height={250}
                />
              </div>

              <div className={styles.desc}>
                {desc}
              </div>
            </div>
        </Collapse>
    </div>
  )
}

export default AccordionEntry