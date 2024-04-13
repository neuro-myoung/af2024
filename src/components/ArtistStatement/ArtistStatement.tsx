import TextReveal from '@/components/TextReveal/TextReveal'
import Image from 'next/image';

const txt = "I am especially drawn to nature, and strive to capture the tiny details and unique character of every subject I draw."


export default function ArtistStatement() {

    return (

        <section className="w-screen relative flex justify-center items-center min-h-screen before:content-[''] before:absolute before:bg-slate-200 before:h-full before:w-screen">
            <div className="max-w-[1600px]">
                <TextReveal value={txt} />
            </div>

        </section>

    )
}
