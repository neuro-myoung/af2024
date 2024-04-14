
import Image from 'next/image'
import Accordion from '../Accordion/Accordion'

const Shop = () => {
    return (
        <section className="w-full bg-[#f2f2f2] min-h-screen flex justify-center">
            <div className="w-full max-w-[1600px] grid grid-cols-2 grid-rows-1 gap-5">
                <div className="h-full flex flex-col justify-center gap-10 p-[1rem] relative items-around bg-red-100">
                    <Accordion />
                    <button className="relative w-[200px] transition-all ease-in-out duration-200  text-[#0e0008] text-[1.2rem] py-[0.75rem] px-[2rem] bg-[#000] bg-opacity-0 pointer rounded-sm outline outline-1 outline-[#0e0008] hover:bg-opacity-20 focus:bg-opacity-20 hover:scale-105 focus:scale-105">
                        Visit Store
                    </button>
                </div>
                <div className="bg-green-100">

                </div>
            </div>
        </section >
    )
}

export default Shop
