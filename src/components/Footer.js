import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

const sections = [
  {
    name: 'About Us',
    links: [
      'How it works',
      'Testimonials',
      'Careers',
      'Investors',
      'Terms of Services',
    ],
  },
  {
    name: 'Videos',
    links: ['Submit Videos', 'Ambassadors', 'Agency', 'Influencer'],
  },
  {
    name: 'Contact Us',
    links: ['Contact', 'Support', 'Destinations', 'Sponsorships'],
  },
  {
    name: 'Social Media',
    links: ['Instagram', 'Facebook', 'Youtube', 'Twitter'],
  },
]

const Section = ({ name, links }) => (
  <div className="flex flex-col items-start text-white">
    <h2 className="font-bold mb-4">{name}</h2>
    {links.map((link) => (
      <button className="text-left hover:text-green-500 mb-2">{link}</button>
    ))}
  </div>
)

const Footer = () => {
  return (
    <div className="grid place-items-center bg-gray-900 text-white py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24  max-w-screen-xl px-8 my-12">
        {sections.map((section) => (
          <Section {...section} />
        ))}
      </div>
      <div className="font-bold text-2xl mb-4">dolla</div>
      <div className="text-xs mb-4">dolla © 2020 All rights reversed.</div>
      <div className="grid grid-cols-5 gap-4 text-2xl">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  )
}

export default Footer
