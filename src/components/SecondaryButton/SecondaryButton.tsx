import { ReactNode } from 'react'

const SecondaryButton = ({ children }: { 
    children: ReactNode
  }) => (
    
        <button className="relative w-[200px] transition-all ease-in-out duration-200  text-[1.2rem] py-[0.75rem] px-[2rem] bg-[#fff] bg-opacity-0 pointer rounded-sm outline outline-1 outline-white hover:bg-opacity-20 focus:bg-opacity-20 hover:scale-105 focus:scale-105">
            {children}
        </button>
    )

export default SecondaryButton
