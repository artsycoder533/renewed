import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Services from '@/components/Services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main 
    >
      <Header />
      <Hero />
       <Intro />
      <Services />
      <Footer /> 
    </main>
  )
}

// className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}