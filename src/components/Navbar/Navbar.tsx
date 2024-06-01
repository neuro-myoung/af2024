import Link from "next/link";
import NavItems from './NavItems/NavItems'

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0e0008]/75 backdrop-blur-md shadow-[0_8px_32px_-8px_rgba(31, 38, 135, 0.37)] border-b border-[#ffffff]/20 fixed px-4 h-16 z-10">
      <header className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full flex max-w-[1400px]">
            <div>
                <Link href='/'>Alix Fuerst Art</Link>
            </div>
            <NavItems />
        </div>
      </header>
    </nav>
  )
}

export default Navbar