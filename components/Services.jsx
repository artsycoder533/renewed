import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '@/data'

function Services() {

  return (
    <div className="bg-white  pt-24" id="services">
      <div className="w-[90vw] max-w-[1400px] mx-auto flex flex-col items-center justify-between pb-24">
        <h2 className="text-5xl text-center pb-16 text-[#BE8DE7]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            return <ServiceCard key={index} {...service} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
