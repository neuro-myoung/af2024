import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div className={styles.upperFooter}>
            <div>
              <p>Locally serving the greater Boston area</p>
              <p>Alix Fuerst</p>
              <p>alix.fuerst[a]gmail.com</p>
            </div>
          </div>
            <p>Copyright &copy; 2023 Alix Fuerst</p>
        </div>
    </div>
  )
}

export default Footer