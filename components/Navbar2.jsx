import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import Hamburger from './Hamburger'
import { useEffect } from 'react'
import { navItems } from '@/data'
import { RxChevronDown } from 'react-icons/rx'

function Navbar2() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style = 'scroll'
    }
  }, [open])

  return (
    <nav
      className="flex items-center justify-between max-w-[1400px]  flex-col md:flex-row md:w-full mx-auto"
      open={open}>
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-6 flex-row">
          <Image
            src={logo}
            alt="ReNEWed Psychological and Consultation Services, LLC logo"
            width={75}
            height={75}
            priority
          />
          <h1 className="text-xl font-semibold text-[#601A7F] hidden xl:block">
            ReNEWed Psychological and Consultation Services, LLC logo
          </h1>
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          'flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[90px] left-0 right-0 h-[calc(100vh-91px)] md:h-auto transition-all ease-in-out duration-500 ' +
          (open ? 'translate-x-0' : 'translate-x-[100vh] md:translate-x-0')
        }>
        {navItems.map((navItem, index) => {
          const { link, path, sublinks } = navItem
          return (
            <li key={index}>
              {sublinks ? (
                // Dropdown menu for "Services"
                <div className="relative group">
                  <Link
                    className="text-2xl md:text-base hover:underline py-2 hover:text-[#ECD4FF] flex items-center gap-2 text-white"
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
                  className="text-2xl md:text-base hover:underline py-2 hover:text-[#ECD4FF] text-white"
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

export default Navbar2
