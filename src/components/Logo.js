import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import React from 'react'

const Logo = () => (
  <Link
    className="font-bold text-2xl"
    to="/"
    onClick={() => scroll.scrollToTop()}
  >
    dolla
  </Link>
)

export default Logo
