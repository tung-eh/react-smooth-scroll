import { Link as ScrollLink } from 'react-scroll'
import React from 'react'

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

const Navs = ({ webOnly, toggle = () => {} }) => (
  <>
    <div
      className={`${
        webOnly ? 'hidden md:grid absolute' : 'grid'
      } md:grid-flow-col text-center text-xl md:text-base gap-8`}
    >
      {navs.map(({ to, text }) => (
        <ScrollLink className="hover:text-green-500" to={to} onClick={toggle}>
          <button>{text}</button>
        </ScrollLink>
      ))}
    </div>
  </>
)

export default Navs
