import Image from 'next/image';
import PriceTable from '@/components/PriceTable/PriceTable';

const Commission = () => {
    return (
        <main className="flex flex-col text-[#0e0008] w-screen min-h-screen justify-center items-center bg-[#f2f2f2] px-12 py-64">
            <h1 className="max-w-[1400px] w-full">Commission Artwork</h1>
            <div className="relative max-w-[1400px] w-full before:content-[''] before:absolute before:w-[100%] before:h-[20px] before:l-0 before:t-0 before:border-l-2 before:border-r-2 before:border-t-2 before:border-[#0e0008] after:content-[''] after:absolute after:w-[100%] after:h-[20px] after:r-0 after:b-100 after:border-l-2 after:border-r-2 after:border-b-2 after:border-[#0e0008]">
                <div className="flex px-8 gap-12">
                    <div className="w-full py-12 px-6 flex gap-6">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-[2rem] font-semibold">A perfect way to <span className="text-[#e93e68] font-semibold">commemorate</span> the pets, people, and places you love</h2>
                            <p className=" md:text-[1.2rem] my-[0.75rem]">
                                I offer colored pencil and graphite pencil portraits and artwork, which come in a number of sizes ranging from small
                                to large. Your choice may depend on the number of subjects in your portrait or the decor of your home. I usually have a waiting list but I will always try to juggle my schedule
                                to fit in a special occasion if you have a deadline. Once the details are agreed on you can secure your spot by submitting a 50% deposit.
                            </p>

                            <p>*Pricing is for a single subject with a white background. Add 20% for each additional subject. 5x7 sizing is only available for single subjects. 
                                Pricing for backgrounds are negotiated based on complexity.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center py-12">
                        <h2 className="text-[2rem] mb-6 font-semibold">Choose your medium</h2>
                        <PriceTable />

                    </div>

                </div>
                <div className="flex px-8 gap-12">
                    <div className="flex flex-col gap-6">
                    <h2 className="text-[2rem] font-semibold"><span className="text-[#e93e68] font-semibold">High quality references</span> help capture the details</h2>
                    <p className="max-w-[60ch] text-[1.2rem] my-[0.75rem]">
                        The most suitable reference photos for portraiture are taken up close at eye level 
                        and lit with natural light. If you can&apos;t decide, I&apos;m happy to give suggestions. 
                        You can submit multiple photos that best represent distinct aspects you would like to capture.
                        Photos can be sent by email or by postal mail.  
                    </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Commission