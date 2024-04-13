import { ReactNode } from 'react'

const PrimaryButton = ({ children }: { 
    children: ReactNode
  }) => (
    
        <button className="relative transition-all ease-in-out duration-200 rounded-sm w-[200px] px-[1rem] py-[0.75rem] m-0 text-[1.2rem] pointer bg-[linear-gradient(0.3turn,#655421,#D4AF37,#e4e4e4,#D4AF37,#655421)] bg-[length:300%_100%] hover:scale-105 focus:scale-105 hover:bg-[100%_0] focus-[100%_0] text-[#0e0008]">
            {children}
        </button>
    )

export default PrimaryButton
