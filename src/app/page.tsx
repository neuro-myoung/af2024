import Hero from '@/components/Hero/Hero'
import ArtistStatement from '@/components/ArtistStatement/ArtistStatement'
import GalleryScroll from '@/components/GalleryScroll/GalleryScroll'
import Shop from '@/components/Shop/Shop'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <ArtistStatement />
        <GalleryScroll />
        <Shop />
      </main>
    </div>
  )
}
