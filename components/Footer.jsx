import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/data'
import logo from '../public/images/logo.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
   const getDate = () => {
     const date = new Date()
     return date.getFullYear()
  }
  
  return (
    <footer className="flex flex-col justify-center items-center sticky top-full bg-black text-white py-4">
      <div className="w-[90vw] md:max-w-[1400px] flex flex-col gap-6 lg:flex-row justify-center md:justify-between">
        <Image src={logo} width={275} height={275} alt="" />
        <div className="w-full md:w-auto">
          <ul className="w-full md:w-auto grid grid-cols-2 md:gap-x-24">
            {footerLinks.map((footerLink, index) => {
              const { link, path } = footerLink
              return (
                <li key={index} className="py-3">
                  <Link
                    href={path}
                    scroll={false}
                    className="hover:underline py-2 hover:text-[#26CCAF]">
                    {link}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-center  flex flex-col ">
            ReNEWed Psychological and Consultation Services, LLC
          </p>
          <p className="text-center  flex flex-col gap-3">Suprise, AZ</p>
          <Link
            className="text-center  flex flex-col gap-3 hover:text-[#26CCAF]"
            href="tel:850-739-2332">
            850-739-2332
          </Link>
          <Link href="mailto:renewedpsychological@gmail.com" className="hover:text-[#26CCAF]">
            renewedpsychological@gmail.com
          </Link>
          <div className="flex gap-4 mt-2">
            <Link href="https://www.instagram.com/renewedpsychological/">
              <FaInstagram className="text-3xl hover:text-[#26CCAF]" />
            </Link>
            <Link href="https://www.facebook.com/renewedpsychological">
              <FaFacebookF className="text-3xl hover:text-[#26CCAF]" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 w-[90vw] md:max-w-[1400px] p-2">
        Copyright &copy; {getDate()} ReNEWed Psychological and Consultation
        Services, LLC | All Rights Reserved | Website Made By{' '}
        <Link
          href="https://www.natashajohnson.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline py-2 hover:text-[#1A8B90]">
          Natasha Johnson
        </Link>
      </p>
    </footer>
  )
}

export default Footer