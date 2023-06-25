import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Navbar3 from './Navbar3'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`px-2 py-4 fixed w-full top-0 z-30 bg-black  ${
        isScrolled
          ? 'bg-black'
          : 'md:bg-transparent bg-gradient-to-b from-black to-transparent'
      }`}>
      {/* <Navbar /> */}
      <Navbar3 />
    </header>
  )
}

export default Header

//bg-[#044C44]