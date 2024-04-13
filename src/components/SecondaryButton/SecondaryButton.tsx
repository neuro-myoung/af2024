import styles from './secondarybutton.module.css'
import { ReactNode } from 'react'

const SecondaryButton = ({ children }: { 
    children: ReactNode
  }) => (
    
        <button className={styles.secondaryButton}>
            {children}
        </button>
    )

export default SecondaryButton
