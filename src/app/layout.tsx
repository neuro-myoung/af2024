import type { Metadata } from "next";
import { Alegreya } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const alegreya = Alegreya({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Alix Furest Art",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alegreya.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
