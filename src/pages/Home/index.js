import React from 'react'

import Button from '../../components/Button'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import ServicesSection from './ServicesSection'
import carImg from '../../images/undraw_off_road.svg'
import profileImg from '../../images/undraw_profile.svg'
import savingImg from '../../images/undraw_savings.svg'

const Home = () => (
  <div>
    <HeroSection />
    <InfoSection
      id="about"
      darkTheme
      image={carImg}
      topline="Premium Bank"
      headline="Unlimited Transactions with zero fees"
      description="Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees."
    >
      <Button>Get started</Button>
    </InfoSection>
    <InfoSection
      id="discover"
      image={savingImg}
      imageFirst
      topline="Unlimited Access"
      headline="Login to your account at any time"
      description="We have you covered no matter where you are located. All you need is an internet connection and a phone computer"
    >
      <Button variant="dark">Learn more</Button>
    </InfoSection>
    <ServicesSection />
    <InfoSection
      id="signup"
      image={profileImg}
      topline="Join our team"
      headline="Creating an account is extremely easy"
      description="Get everything set up and ready in under 10 minutes. All you need to do is  add your information and you're ready to go."
    >
      <Button variant="dark">Start now</Button>
    </InfoSection>
  </div>
)

export default Home
