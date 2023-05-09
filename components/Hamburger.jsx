import React from 'react'

function Hamburger({ open, setOpen }) {
  return (
    <>
      <button
        aria-label="menu"
        aria-haspopup="menu"
        tabIndex="0"
        onClick={() => setOpen(!open)}
        className="w-14 h-12 flex flex-col justify-center items-center relative md:hidden border-none">
        <span
          className={
            'w-full h-[6px] bg-[#1A8C91] rounded-lg transition-all ease-in duration-300 absolute ' +
            (open ? 'origin-center rotate-[400deg]' : 'translate-y-[-16px]')
          }
        />
        <span
          className={`w-full h-[6px] bg-black rounded-lg transition-opacity absolute ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={
            'w-full h-[6px] bg-[#601A7F] rounded-lg transition-all ease-in duration-300 absolute ' +
            (open ? 'origin-center -rotate-45 bg-black' : 'translate-y-[16px]')
          }
        />
      </button>
    </>
  )
}

export default Hamburger
