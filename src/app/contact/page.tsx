import React from 'react';
import ContactForm from './ContactForm';
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from 'next/link'

const Contact = () => {
  return (
    <main className="flex flex-col text-[#0e0008] w-screen min-h-screen justify-center items-center bg-[#f2f2f2] px-12 py-64">
      <div className="flex flex-col  justify-center items-center max-w-[1600px]">
      <h1 className="max-w-[1600px] w-full">Lets Connect</h1>
      <div className="relative max-w-[1600px] w-full before:content-[''] before:absolute before:w-[100%] before:h-[20px] before:l-0 before:t-0 before:border-l-2 before:border-r-2 before:border-t-2 before:border-[#0e0008] after:content-[''] after:absolute after:w-[100%] after:h-[20px] after:r-0 after:b-100 after:border-l-2 after:border-r-2 after:border-b-2 after:border-[#0e0008]">
        <div className="grid grid-cols-2 w-full h-full py-12 px-6 justify-center align-center justify-content-center items-center">
          <div className="my-[1.5rem] mx-[0.75rem] flex flex-col items-center justify-start gap-12">
            <p className="max-w-[60ch] text-center">Have questions, want to connect, or commission custom artwork? Send me a message or reach out on social media.</p>
            <div className="w-full flex flex-col justify-center items-center gap-12">
              <h2 className="max-w-[30ch] text-center text-[1.5rem]">Follow me on Social Media to see the latest</h2>
              <div className="flex gap-12 justify-center items-center w-full">
                <Link href="https://www.instagram.com/alixfuerst_art/" ><FaInstagram className="text-[2rem] text-[#0e0008] hover:text-[#e93e68] focus:text-[#e93e68]" /></Link>
                <Link href="https://www.tiktok.com/@alixfuerst_art" ><FaTiktok className="text-[2rem] text-[#0e0008] hover:text-[#e93e68] focus:text-[#e93e68]" /></Link>
                <Link href="https://www.facebook.com/AlixFuerstArt/" ><FaFacebook className="text-[2rem] text-[#0e0008] hover:text-[#e93e68] focus:text-[#e93e68]" /></Link>
                <Link href="https://www.youtube.com/c/alixfuerstart" ><FaYoutube className="text-[2rem] text-[#0e0008] hover:text-[#e93e68] focus:text-[#e93e68]" /></Link>
              </div>
              <div className="flex gap-12 justify-center items-center w-full my-[2rem]">
                <Link href="mailto:alix.fuerst@gmail.com" ><TfiEmail className="text-[2rem] text-[#0e0008] hover:text-[#e93e68] focus:text-[#e93e68]" /></Link>
                <p className="max-w-[50ch] text-center">alix.fuerst@gmail.com</p>
              </div>
              <p className="max-w-[50ch] text-center"> Based in Medford, MA and locally serving the greater Boston area</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      </div>
    </main>
  )
}

export default Contact