import React from 'react'
import hero from '../public/images/hero.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-[calc(70vh-91px)] sm:min-h-[calc(80vh-91px)] w-full py-4 relative mix-blend-multiply -z-1">
      <Image
        src={hero}
        alt="lotus flower floating on water"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute -z-10 "
        priority
      />
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center w-full mt-[91px] pb-8 gap-12">
        <h1 className="text-7xl font-bold w-[70%] leading-snug text-white">
          Experience Change with ReNEWed Psychologial and Consultation Services,
          LLC
        </h1>
        <button
          type="button"
          className="px-8 py-4 self-start font-bold bg-[#BE8DE7] text-[#0B4D4B]  hover:bg-[#26CCAF] text-lg">
          Get In Touch
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-75 -z-10 "></div>
    </section>
  )
}

export default Hero