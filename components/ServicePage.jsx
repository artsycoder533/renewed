import React from 'react'
import Image from 'next/image'

const ServicePage = ({name, slogan, description, image}) => {
  return (
    <section className="bg-[#044C44] pt-[250px]  items-center py-24">
      <div className="flex flex-col lg:flex-row w-full justify-center items-start  max-w-[1400px] mx-auto">
        <div className="w-full h-96 lg:h-auto lg:w-1/2">
          <Image priority src={image} className="w-full h-full object-contain" />
        </div>
        <div className="lg:w-1/2 px-14 py-12  lg:h-[800px]">
          <h2 className="text-5xl font-bold mb-12 tracking-tighter text-[#BF8EE8] text-center lg:text-left">
            {name}
          </h2>
          <p className="text-2xl font-light leading-12 text-white mb-10 text-center lg:text-left">
            {slogan}
          </p>
          <p className="leading-8 text-white text-lg">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default ServicePage