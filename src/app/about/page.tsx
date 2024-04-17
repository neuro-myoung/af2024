import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <main className="flex justify-center items-center text-[#0e0008] w-screen min-h-screen bg-[#f2f2f2]">
      <div className="px-[1rem] py-[10rem] max-w-[1400px]">
        <h1 className="w-full font-semibold">About Me</h1>
        <div className="relative before:content-[''] before:absolute before:w-[100%] before:h-[20px] before:l-0 before:t-0 before:border-l-2 before:border-r-2 before:border-t-2 before:border-[#0e0008] after:content-[''] after:absolute after:w-[100%] after:h-[20px] after:r-0 after:b-100 after:border-l-2 after:border-r-2 after:border-b-2 after:border-[#0e0008]">
          <div className="flex flex-col md:flex-row h-full justify-center items-center py-10 gap-8 md:py-36">
            <div className="flex flex-col order-last md:order-first w-full md:w-[50%] w-full items-center gap-8 text-[1.2rem] md:px-4">
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
            <div className="px-8 ">
              <div className="bg-green-300 rounded-lg overflow-hidden">
                <Image
                  src="/artist.jpg"
                  width="400"
                  height="400"
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 736px) 50%, 50%"
                  alt="Image of Alix Fuerst drawing a portrait."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About