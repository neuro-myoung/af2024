import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <main className="flex flex-col text-[#0e0008] w-screen min-h-screen justify-center bg-[#f2f2f2] px-12 py-64">
      <h1 className="max-w-[1600px] w-full">About Me</h1>
      <div className="relative max-w-[1600px] w-full before:content-[''] before:absolute before:w-[100%] before:h-[20px] before:l-0 before:t-0 before:border-l-2 before:border-r-2 before:border-t-2 before:border-[#0e0008] after:content-[''] after:absolute after:w-[100%] after:h-[20px] after:r-0 after:b-100 after:border-l-2 after:border-r-2 after:border-b-2 after:border-[#0e0008]">
        <div className="grid grid-cols-2 h-full py-12 content-center justify-items-center items-center">
        <div className="flex flex-col w-full justify-center max-w-[60ch] items-center gap-8 text-[1.2rem] py-12 px-6">
          <p>
            I’m Alix, a professional portrait and wildlife artist based in Medford, MA. Right after earning my Bachelor of Fine Arts at UNC Greensboro, I fell in love with colored pencils and decided to start my own business specializing in realistic drawings.
          </p>
          <p>
            Using your own photographs and the highest quality materials, I create realistic hand drawn portraits of your beloved pets and family members. These are personal keepsakes that can be cherished for many years to come. I like to work very closely with my clients and I am not happy until you are 100% satisfied with your portrait.
          </p>
          <p>
            Feel free to view some examples of my portraits, wildlife art, and more in my gallery. If you would like to commission your very own unique drawing then please get in touch.
          </p>
        </div>
        <div className="flex justify-center items-center h-[450px] w-[450px] overflow-hidden rounded-lg cursor-pointer relative">
          <Image
            src="/artist.jpg"
            fill={true}
            style={{ objectFit: "contain" }}
            sizes="(max-width: 600px) 100%, 50%"
            alt="Image of Alix Fuerst drawing a portrait."
          />
        </div>
        </div>
      </div>
    </main>
  )
}

export default About