import styles from './primarybutton.module.css'
import { ReactNode } from 'react'

const PrimaryButton = ({ children }: { 
    children: ReactNode
  }) => (
    
        <button className={styles.primaryButton}>
            {children}
        </button>
    )

export default PrimaryButton
