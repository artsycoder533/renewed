import React, { useState, useEffect } from 'react'
import { navItems } from '@/data'
import logo from '../public/images/logo.png'
import Image from 'next/image'
import Hamburger from './Hamburger'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style = "scroll"
    }
  }, [open])
  return (
    <nav className=" text-white flex items-center justify-between max-w-[1400px]  flex-col md:flex-row md:w-full mx-auto">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-6 flex-row">
          <Image
            src={logo}
            alt="ReNEWed Psychological and Consultation Services, LLC logo"
            width={150}
            height={150}
            priority
          />
          <h1 className="text-2xl font-bold  hidden xl:block">
            ReNEWed Psychological and Consultation Services, LLC
          </h1>
          {/* <p>One day at a time.</p> */}
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          'flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[90px] left-0 right-0 h-[calc(100vh-91px)] md:h-auto  transition-all ease-in-out duration-500 ' +
          (open ? 'translate-x-0' : 'translate-x-[100vh] md:translate-x-0')
        }>
        {navItems.map((navItem, index) => {
          const { link, path } = navItem
          return (
            <li key={index}>
              <Link
                className="text-2xl md:text-base hover:underline py-2 hover:text-[#1A8B90]"
                href={path}
                scroll={false}
                onClick={() => setOpen(false)}>
                {link}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar