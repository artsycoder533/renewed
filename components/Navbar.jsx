import React, { useState, useEffect } from 'react'
import { navItems } from '@/data'
import logo from '../public/images/logo.png'
import Image from 'next/image'
import Hamburger from './Hamburger'
import Link from 'next/link'
import { RxChevronDown } from 'react-icons/rx'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style = 'scroll'
    }
  }, [open])

  return (
    <nav className="text-white flex items-center justify-between max-w-[1400px] flex-col md:flex-row md:w-full mx-auto px-2">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center md:gap-6 flex-row">
          <Image
            src={logo}
            alt="ReNEWed Psychological and Consultation Services, LLC logo"
            width={150}
            height={150}
            priority
          />
          <h1 className="text-2xl font-bold hidden xl:block">
            ReNEWed Psychological and Consultation Services, LLC
          </h1>
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          'flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[138px] left-0 right-0 h-[calc(100vh-138px)] md:h-auto transition-all ease-in-out duration-500  ' +
          (open
            ? 'translate-x-0 bg-black'
            : 'translate-x-[100vw] md:translate-x-0 ')
        }>
        {navItems.map((navItem, index) => {
          const { link, path, sublinks } = navItem
          return (
            <li key={index}>
              {sublinks ? (
                // Dropdown menu for "Services"
                <div className="relative group">
                  <Link
                    className="text-2xl md:text-base hover:underline py-2 hover:text-[#ECD4FF] flex items-center gap-2"
                    href={''}
                    scroll={false}
                    onClick={() => setOpen(false)}>
                    {link} <RxChevronDown />
                  </Link>
                  <ul className="hidden absolute z-10 left-0 mt-0 space-y-2 bg-[#044C44] text-white rounded-md shadow-lg group-hover:block w-48">
                    {sublinks.map((sublink, subindex) => (
                      <li key={subindex}>
                        <Link
                          href={sublink.path}
                          className="block px-4 py-3 hover:bg-[#BE8DE7]"
                          scroll={false}
                          onClick={() => setOpen(false)}>
                          {sublink.link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                // Regular link
                <Link
                  className="text-2xl md:text-base hover:underline py-2 hover:text-[#ECD4FF]"
                  href={path}
                  scroll={false}
                  onClick={() => setOpen(false)}>
                  {link}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar