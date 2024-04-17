import React from 'react'
import { Collapse } from "react-collapse";
import { TiMinus } from "react-icons/ti";
import { PiCaretDown } from "react-icons/pi";
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
    <div className="w-full rounded-[15px] max-w-[600px] cursor-pointer overflow-hidden after:bg-[rgba(0, 0, 0, 0.05)]">
        <div className="flex mt-0 md:mt-[10px] justify-between w-full  rounded-[15px_15px_0_0] hover:bg-[rgba(229,229,230,1)] focus:bg-[rgba(229,229,230,1)]" onClick={toggle}>
            <p className="text-[1.4rem] font-semibold">{title}</p>
            <div className="m-auto">
                {open ? <TiMinus /> : <PiCaretDown />}
            </div>
        </div>

        <Collapse isOpened={open} className="transition transition-height ease-in-out duration-300">
            <div className="relative flex md:flex-row flex-col gap-6 items-center w-full justify-center items-start p-[10px] bg-[linear-gradient(0.9turn,rgba(239, 239, 240, 0.2),rgba(255, 255, 255, 1),rgba(239, 239, 240, 0.2),rgba(239, 239, 240, 0.2),rgba(239, 239, 240, 0.2))] bg-[length:300%_100%] rounded-[0_0_15px_15px] backdrop-blur-lg shadow-[0_8px_20px_rgba(0, 0, 0, 0.2)] border border-[#000000]/10 transition-all ease-in-out duration-500 hover:bg-[100%_0] focus:bg-[100%_0]">
              <div>
                <Image 
                  src={imgsrc}
                  alt={alt}
                  className="rounded-[5px]"
                  style={{objectFit:"cover"}}
                  width={250}
                  height={250}
                />
              </div>

              <div className="text-[1.2rem]">
                {desc}
              </div>
            </div>
        </Collapse>
    </div>
  )
}

export default AccordionEntry