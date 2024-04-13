import Hero from '@/components/Hero/Hero'
import GalleryScroll from '@/components/GalleryScroll/GalleryScroll'
import Shop from '@/components/Shop/Shop'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <GalleryScroll />
        <Shop />
      </main>
    </div>
  )
}
