import React from 'react';
import styles from './contact.module.css';
import ContactForm from './ContactForm';
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import Link from 'next/link'

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <h1>Lets Connect</h1>
      <div className={styles.formWrapper}>
        <div className={styles.descriptionWrapper}>
          <p>Have questions, want to connect, or commission custom artwork? Send me a message or reach out on social media.</p>
            <div className={styles.contactMethods}>
              <h2>Follow me on Social Media to see the latest</h2>
              <div className={styles.socialIcons}>
                <Link href="https://www.instagram.com/alixfuerst_art/" ><FaInstagram className={styles.icon}/></Link>
                <Link href="https://www.tiktok.com/@alixfuerst_art" ><FaTiktok className={styles.icon}/></Link>
                <Link href="https://www.facebook.com/AlixFuerstArt/" ><FaFacebook className={styles.icon}/></Link>
                <Link href="https://www.youtube.com/c/alixfuerstart" ><FaYoutube className={styles.icon} /></Link>
              </div>
              <div className={styles.emailWrapper}> 
              <Link href="mailto:alix.fuerst@gmail.com" ><TfiEmail className={styles.icon} /></Link>
              <p>alix.fuerst@gmail.com</p>
              </div>
              <p> Based in Medford, MA and locally serving the greater Boston area</p>
            </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
  }

export default Contact