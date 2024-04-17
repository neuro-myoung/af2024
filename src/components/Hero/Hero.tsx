import Bokeh from '../Bokeh/Bokeh'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="min-h-screen relative w-full flex justify-center overflow-hidden">
            <Bokeh />
            <div className="w-full max-w-[1400px] flex justify-center px-[1rem] mt-[4rem] py-[4rem] md:py-0">
                <div className="grid md:grid-cols-2 grid-cols-1 w-full md:grid-rows-1 grid-rows-2">
                    <div className="flex flex-col justify-center items-start gap-8 md:gap-12">
                        <h1 className="text-[#ffffff] [&>span]:text-[#FFC300] text-center md:text-left leading-[3.6rem]">
                            Vibrant and realistic colored pencil <span>ART</span>
                        </h1>
                        <p className="text-[#d2d2d2] w-full max-w-[50ch] md:text-[1.2rem] text-center md:text-left">
                            Original Artwork, Prints, Greeting Cards, and more ways to bring art into your home.
                        </p>
                        <div className="flex md:flex-row flex-col gap-4 md:gap-8 mx-auto md:m-0">
                            <PrimaryButton>Shop Art</PrimaryButton>
                            <SecondaryButton>Connect</SecondaryButton>
                        </div>
                    </div>
                    <div className="relative md:top-[15%] top-[18%]">
                        <Image
                            src="/homepage/shorthairedpointer.png"
                            fill={true}
                            className="absolute opacity-90"
                            style={{ objectFit: "contain" }}
                            alt="Colored pencil drawing of a short-haired pointer."
                            sizes="(max-width:768px) 200px, 300px"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

