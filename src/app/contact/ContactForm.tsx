'use client';
import styles from './contact.module.css';

export default function ContactForm() {

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const target = e.currentTarget;
        const name = target.elements.namedItem('name') as HTMLInputElement;
        const email = target.elements.namedItem('email') as HTMLInputElement;
        const subject = target.elements.namedItem('subject') as HTMLInputElement;
        const message = target.elements.namedItem('message') as HTMLInputElement;

        const data = {
            name: String(name.value),
            email: String(email.value),
            subject: String(subject.value),
            message: String(message.value),
        };

        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if(!response.ok) {
                throw new Error('HTTP error! status: ' + response.status);
            }
            const responseData = await response.json();
            console.log(responseData);
        } catch (error: any) {
            console.log("There was a problem with the fetch operation " + error.message)
        }
    }
  
    return (
        <form className={styles.formBox} onSubmit={handleSubmit}>
            <div className={styles.formElement}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className={styles.inputBox} autoComplete="off" required minLength={3} maxLength={150} />
            </div>

            <div className={styles.formElement}>
                <label htmlFor="e-mail">E-mail</label>
                <input type="email" id="email" className={styles.inputBox} autoComplete="off" required minLength={3} maxLength={150}/>
            </div>

            <div className={styles.formElement}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" className={styles.inputBox} autoComplete="off" minLength={3} maxLength={200}/>
            </div>

            <div className={styles.formElement}>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className={styles.inputBox} rows={5} placeholder="Type your inquiry in here" required minLength={3} maxLength={1000}/>
                
            </div>
            <button type="submit" className={styles.sendButton}>Send Message</button>
        </form>

    )
}