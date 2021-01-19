import { Link } from 'react-scroll'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import React from 'react'

import Button from '../../components/Navbar/Button'
import heroVideo from '../../videos/video.mp4'

const HeroSection = () => (
  <div className="relative" id="hero">
    <video
      className="h-screen w-full object-cover bg-gray-900"
      autoPlay
      loop
      muted
      src={heroVideo}
      type="video/mp4"
    />
    <div
      className="absolute w-full h-full top-0 left-0"
      style={{
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)',
      }}
    />
    <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-white text-center px-8 pt-20">
      <h1 className="font-bold text-3xl md:text-5xl mb-10">
        Virtual Banking Made Easy
      </h1>
      <p className="max-w-lg md:text-xl mb-10">
        Sign up for a new account today and receive $250 in credit towards your
        next payment
      </p>
      <Link to="signup">
        <Button className="group">
          <span className="mr-2">Get started</span>
          <MdKeyboardArrowRight className="inline group-hover:hidden w-4 h-4" />
          <MdArrowForward className="hidden group-hover:inline w-4 h-4" />
        </Button>
      </Link>
    </div>
  </div>
)

export default HeroSection
