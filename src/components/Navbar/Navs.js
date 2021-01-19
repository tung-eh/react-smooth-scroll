import { Link as ScrollLink } from 'react-scroll'
import React, { useEffect, useState } from 'react'

const navs = [
  {
    to: 'about',
    text: 'About',
  },
  {
    to: 'discover',
    text: 'Discover',
  },
  {
    to: 'services',
    text: 'Services',
  },
  {
    to: 'signup',
    text: 'Sign Up',
  },
]

const NavLink = ({ to, text, ...props }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const ioOptions = {
      threshold: 0.5,
    }
    const ioCallback = (entries, observer) => {
      const entry = entries[0]
      setActive(entry.isIntersecting)
    }

    const observer = new IntersectionObserver(ioCallback, ioOptions)
    observer.observe(document.querySelector(`#${to}`))
  }, [to])

  return (
    <ScrollLink
      className={`cursor-pointer hover:text-green-500 p-2 ${
        active ? 'border-b-2 border-green-500' : ''
      }`}
      smooth
      offset={-80}
      to={to}
      {...props}
    >
      {text}
    </ScrollLink>
  )
}

const Navs = ({ md, toggle = () => {} }) => {
  return (
    <>
      <div
        className={`${
          md ? 'hidden md:grid absolute' : 'grid'
        } md:grid-flow-col text-center text-xl md:text-base gap-6 md:gap-10`}
      >
        {navs.map((nav) => (
          <NavLink {...nav} onClick={toggle} />
        ))}
      </div>
    </>
  )
}

export default Navs
