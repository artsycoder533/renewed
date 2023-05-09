import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ServiceCard({ title, image }) {
  return (
    <div className="shadow-md flex flex-col max-w-[400px] w-full h-[450px] hover:shadow-xl hover:scale-105">
      <div className="w-full flex-1 relative ">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-cover back"
        />
      </div>

      <div className="p-4 border flex flex-col justify-center items-center">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <Link href="/" className="bg-[#ECD4FF] text-[#0B4D4B] px-4 py-3">
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
