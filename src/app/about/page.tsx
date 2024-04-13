import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <main className={styles.aboutMain}>
      <h1>About Me</h1>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContainer}>
          <div className={styles.innerWrapper}>
            <div className={styles.blurb}>
              <p>
                I’m Alix, a professional portrait and wildlife artist based in Medford, MA. Right after earning my Bachelor of Fine Arts at UNC Greensboro, I fell in love with colored pencils and decided to start my own business specializing in realistic drawings.
              </p>
              <p>
                Using your own photographs and the highest quality materials, I create realistic hand drawn portraits of your beloved pets and family members. These are personal keepsakes that can be cherished for many years to come. I like to work very closely with my clients and I am not happy until you are 100% satisfied with your portrait.
              </p>
              <p>
                Feel free to view some examples of my portraits, wildlife art, and more in my gallery. If you would like to commission your very own unique drawing then please get in touch.
              </p>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src="/static/images/artist.jpg"
                fill={true}
                style={{ objectFit: "contain" }}
                sizes="(max-width: 600px) 100%, 50%"
                alt="Image of Alix Fuerst drawing a portrait."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About