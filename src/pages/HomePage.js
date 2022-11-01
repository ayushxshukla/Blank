import React from 'react'

import AppRating from '../components/AppRating'
import BrandsLove from '../components/BrandsLove'
import Header from '../components/common/Header'
import WhatIsThis from '../components/WhatIsThis'
import FinalSlide from '../components/CredSecurity'
import WhatIsBlank from '../components/FeelSpecial'
import HeroSection from '../components/HeroSection'
import MobileScroll from '../components/MobileScroll'
import LogoShowcase from '../components/LogoShowcase'
import WindowPeak from '../components/WindowPeak'
import Inventory from '../components/Inventory'

const HomePage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <LogoShowcase /> 
    <WhatIsBlank />
    <BrandsLove text="WHAT IS THIS SITE ABOUT ?" />
    <WhatIsThis />
    <Inventory  text="OUR INVENTORY :)"/>
    <MobileScroll />
    <div className="non-mobile">
    <WindowPeak />
    </div>
    <FinalSlide />

    <AppRating />
    </>
  )
}

export default HomePage