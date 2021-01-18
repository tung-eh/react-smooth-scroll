import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

import Navs from './Navs'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((x) => !x)

  return (
    <nav className="grid place-items-center bg-gray-900 text-white">
      <div className="flex items-center justify-between w-full max-w-screen-xl py-6 px-8">
        <Link className="font-bold text-2xl" to="/">
          dolla
        </Link>
        <Navs mobileHidden />
        <FaBars className="md:hidden w-6 h-6" onClick={toggle} />
        <div
          className={`fixed flex flex-col items-center justify-evenly w-full h-full top-0 left-0 bg-gray-900 text-white transition-all duration-500 transform ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <FaTimes
            className="absolute w-6 h-6 top-6 right-8"
            onClick={toggle}
          />
          <Navs toggle={toggle} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
