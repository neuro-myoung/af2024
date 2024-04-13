import styles from './hero.module.css'
import Bokeh from '../Bokeh/Bokeh'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import Image from 'next/image'

const Hero = () => {
    return(
        <section className={styles.heroMain}>
            <div className={styles.heroContainer}>
            <Bokeh />
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <h1 className={styles.mainText}>
                        Vibrant and realistic colored pencil <span>ART</span>
                    </h1>
                    <p className={styles.description}>
                        Original Artwork, Prints, Greeting Cards, and more ways to bring art into your home.
                    </p>
                    <div className={styles.buttonWrapper}>
                        <PrimaryButton>Shop Art</PrimaryButton>
                        <SecondaryButton>Connect</SecondaryButton>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.imageWrapper}>
                    <Image
                        src="/static/images/shorthairedpointer3.png"
                        fill={true}
                        className={styles.img}
                        style={{objectFit:"contain"}}
                        alt="Colored pencil drawing of a short-haired pointer."
                    />
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero

