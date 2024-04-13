import Bokeh from '../Bokeh/Bokeh'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="min-h-screen relative w-full flex justify-center overflow-hidden">
            <Bokeh />
            <div className="w-full max-w-[1600px] flex justify-center pt-[5rem] px-[2.5rem] mt-[4rem]">
                <div className="grid md:grid-cols-2 grid-cols-1 w-full md:grid-rows-1 grid-rows-2">
                    <div className="flex flex-col justify-center items-start gap-12">
                        <h1 className="text-[#ffffff] max-w-[600px] [&>span]:text-[#FFC300]">
                            Vibrant and realistic colored pencil <span>ART</span>
                        </h1>
                        <p className="text-slate-400 max-w-[45ch] text-[1.2rem]">
                            Original Artwork, Prints, Greeting Cards, and more ways to bring art into your home.
                        </p>
                        <div className="flex gap-8">
                            <PrimaryButton>Shop Art</PrimaryButton>
                            <SecondaryButton>Connect</SecondaryButton>
                        </div>
                    </div>
                    <div className="relative top-[10%]">
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

