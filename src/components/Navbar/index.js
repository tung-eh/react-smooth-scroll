import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import Button from '../Button'
import Navs from './Navs'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((x) => !x)

  const [heroin, setHeroin] = useState(true) //inside Hero section
  useEffect(() => {
    const ioOptions = {
      threshold: 0.75,
    }
    const ioCallback = (entries, observer) => {
      const entry = entries[0]
      setHeroin(entry.isIntersecting)
    }

    const observer = new IntersectionObserver(ioCallback, ioOptions)
    observer.observe(document.querySelector('#hero'))
  }, [])

  return (
    <nav
      className={`sticky top-0 z-10 grid place-items-center text-white transition duration-500 h-20 md:h-24 -mt-20 md:-mt-24 ${
        heroin ? '' : 'bg-black'
      }`}
    >
      <Navs md />
      <div className="flex items-center justify-between w-full max-w-screen-xl px-8">
        <Link
          className="font-bold text-2xl"
          to="/"
          onClick={() => scroll.scrollToTop()}
        >
          dolla
        </Link>
        <Link className="hidden md:block" to="/signin">
          <Button>Sign In</Button>
        </Link>
        <FaBars className="md:hidden w-6 h-6" onClick={toggle} />
        <div
          className={`fixed z-10 flex flex-col items-center justify-evenly w-full h-full top-0 left-0 bg-black text-white transition-all duration-500 transform ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <FaTimes
            className="absolute w-6 h-6 top-6 right-8"
            onClick={toggle}
          />
          <Navs toggle={toggle} />
          <Link to="/signin">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
