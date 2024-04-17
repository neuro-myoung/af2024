import styles from './navitems.module.css'
import Link from 'next/link'

const NavItem = () => {
  return (
    <div className="flex w-full h-full justify-end items-center hover:color-white focus:color-white">
      <Link href="/" className="h-full flex justify-center items-center px-4 hover:bg-[#e93e68] focus:bg-[#e93e68] group">
        <h3 className="text-[#c2c2c2] text-xl group-hover:text-white">Home</h3>
      </Link>
      <Link href="/about" className="h-full flex justify-center items-center px-4 hover:bg-[#e93e68] focus:bg-[#e93e68] group">
        <h3 className="text-[#c2c2c2] text-xl group-hover:text-white">About</h3>
      </Link>
      <Link href="/galleries" className="h-full flex justify-center items-center px-4 hover:bg-[#e93e68] focus:bg-[#e93e68] group">
        <h3 className="text-[#c2c2c2] text-xl group-hover:text-white">Galleries</h3>
      </Link>
      <Link href="https://www.etsy.com/shop/AlixFuerstArt" className="h-full flex justify-center items-center px-4 hover:bg-[#e93e68] focus:bg-[#e93e68] group">
        <h3 className="text-[#c2c2c2] text-xl group-hover:text-white">Shop</h3>
      </Link>
      <Link href="/commission" className="h-full flex justify-center items-center px-4 hover:bg-[#e93e68] focus:bg-[#e93e68] group">
        <h3 className="text-[#c2c2c2] text-xl group-hover:text-white">Commission</h3>
      </Link>
      <Link href="/contact" className="h-full flex justify-center items-center px-4 hover:bg-[#e93e68] focus:bg-[#e93e68] group">
        <h3 className="text-[#c2c2c2] text-xl group-hover:text-white">Contact</h3>
      </Link>
        
    </div>
  )
}

export default NavItem

