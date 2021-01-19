import React from 'react'
import carImg from '../../images/undraw_off_road.svg'
import onlineImg from '../../images/undraw_online_information.svg'
import benefitImg from '../../images/undraw_personal_finance.svg'

const services = [
  {
    image: carImg,
    feature: 'Reduce Expenses',
    description: 'We help reduce your fees and increase your overall revenue.',
  },
  {
    image: onlineImg,
    feature: 'Virtual Offices',
    description: 'You can access our plaform online anywhere in the world.',
  },
  {
    image: benefitImg,
    feature: 'Premium Benefits',
    description:
      'Unlock our special membership card that returns 5% cash back.',
  },
]

const ServicesSection = () => (
  <div
    id="services"
    className="grid place-items-center min-h-screen w-full bg-black text-white"
  >
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="font-bold text-3xl md:text-5xl mb-20">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ image, feature, description }) => (
          <div className="grid justify-items-center items-center gap-2 transition duration-500 transform hover:scale-105 bg-white rounded-xl text-black max-w-xs p-8">
            <img className="mb-4 max-h-40" src={image} alt="feature" />
            <h2 className="font-bold">{feature}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default ServicesSection
