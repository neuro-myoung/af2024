
import Image from 'next/image'
import styles from './shop.module.css'
import Accordion from '../Accordion/Accordion'

const Shop = () => {
    return(
        <section className={styles.shopWrapper}>
            <div className={styles.shopContainer}>
                <div className={styles.content}>
                    <Accordion />

                    <button className={styles.storeButton}>
                        Visit Store
                    </button>
                </div>
                <div className={styles.Outer}>  
                        <div className={styles.imgWrapper}> 
                            <Image
                                src="/static/images/fireplace_mockup_small.png"
                                fill={true}
                                style={{objectFit:"cover"}}
                                alt="Colored pencil drawing of a short-haired pointer."
                            />
                        </div>
                        <div className={styles.Inner}>
                            <div className={styles.imgWrapper}>
                                <Image
                                    src="/static/images/panther-mockup_compressed_small.png"
                                    fill={true}
                                    style={{objectFit:"cover"}}
                                    alt="Colored pencil drawing of a short-haired pointer."
                                />
                            </div>
                            <div className={styles.imgWrapper}>
                                <Image
                                    src="/static/images/hummingbird_mockup_small.png"
                                    fill={true}
                                    style={{objectFit:"cover"}}
                                    alt="Colored pencil drawing of a short-haired pointer."
                                />
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Shop
