'use client';

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
        <form className="w-full max-w-[600px] z-5" onSubmit={handleSubmit}>
            <div className="flex flex-col py-[1rem] w-full">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="py-[0.75rem] px-[2rem] border border-1 rounded-sm border-[#0e0008] focus:no-outline bg-[rgba(233,62,104,0.1)]" autoComplete="off" required minLength={3} maxLength={150} />
            </div>

            <div className="flex flex-col py-[1rem] w-full">
                <label htmlFor="e-mail">E-mail</label>
                <input type="email" id="email" className="py-[0.75rem] px-[2rem] border border-1 rounded-sm border-[#0e0008] focus:no-outline bg-[rgba(233,62,104,0.1)]" autoComplete="off" required minLength={3} maxLength={150}/>
            </div>

            <div className="flex flex-col py-[1rem] w-full">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="py-[0.75rem] px-[2rem] border border-1 rounded-sm border-[#0e0008] focus:no-outline bg-[rgba(233,62,104,0.1)]" autoComplete="off" minLength={3} maxLength={200}/>
            </div>

            <div className="flex flex-col py-[1rem] w-full">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="py-[0.75rem] px-[2rem] border border-1 rounded-sm border-[#0e0008] focus:no-outline bg-[rgba(233,62,104,0.1)]" rows={5} placeholder="Type your inquiry in here" required minLength={3} maxLength={1000}/>
                
            </div>
            <button type="submit" className="relative transition-all ease-in-out duration-200 rounded-sm w-[200px] outline outline-[1px] outline-[#0e0008] text-[#0e0008] py-[0.75rem] px-[2rem] text-[1.2rem] bg-[#000000] bg-opacity-0 cursor-pointer hover:bg-opacity-20 focus:bg-opacity-20 hover:scale-105 focus:scale-105">Send Message</button>
        </form>

    )
}