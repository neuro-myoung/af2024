
import Image from 'next/image'
import Accordion from '../Accordion/Accordion'

const Shop = () => {
    return (
        <section className="w-full bg-[#f2f2f2] min-h-screen flex justify-center">
            <div className="w-full max-w-[1400px] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-0 md:gap-5">
                <div className="h-full flex flex-col justify-center gap-10 p-[1rem] relative items-center">
                    <Accordion />
                    <button className="relative w-[200px] transition-all ease-in-out duration-200 text-[#0e0008] text-[1.2rem] py-[0.75rem] px-[2rem] bg-[#000] bg-opacity-0 pointer rounded-sm outline outline-1 outline-[#0e0008] hover:bg-opacity-20 focus:bg-opacity-20 hover:scale-105 focus:scale-105">
                        Visit Store
                    </button>
                </div>
                <div className="h-full flex justify-center items-center">
                    <div className="grid grid-rows-2 grid-cols-1 w-[90vw] h-[90vw] md:w-[50vw] max-w-[800px] md:h-[50vw] max-h-[700px]">
                        <div className="flex justify-end items-end relative">
                            <Image
                                src="/mockups/fireplace_mockup_small.png"
                                className="rounded-md"
                                fill
                                style={{ objectFit: "contain" }}
                                alt="Render of two bird drawings above a fireplace."
                                sizes="(max-width:768px) 400px, 800px"
                            />
                        </div>
                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="relative">
                                <Image
                                    src="/mockups/panther-mockup_compressed_small.png"
                                    className="rounded-md"
                                    fill
                                    style={{ objectFit: "contain" }}
                                    alt="Mockup of a leopard portrait on a yellow wall."
                                    sizes="(max-width:768px) 300px, 500px"
                                />
                            </div>
                            <div className="flex-stretch relative">
                                <Image
                                    src="/mockups/hummingbird_mockup_small.png"
                                    fill
                                    className="rounded-md"
                                    style={{ objectFit: "contain" }}
                                    alt="Mockup of a hummingbird drawing on a desk."
                                    sizes="(max-width:768px) 300px, 500px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Shop
