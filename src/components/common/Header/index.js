import React,{useState} from 'react'
import { Link } from 'react-scroll'

import "./header.css"
import Logo from "../../../common/images/BLANK_Logo.png"
const Header = () => {

  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };
  
  return (

    <div className='mobile-menu-wrapper'>
        <div className={`mobile-menu only-mobile ${showMobMenu && 'overlay'}`}>
        <div className='mobile-navbar'>
                <Link className="gg" to="whoarewe" spy={true} smooth={true} offset={25} duration={500} href="#whoareyou" onClick={toggleMobileMenu}><div className='mobile-nav-item'>what is this?</div></Link>     
                <Link className="gg" to="ourinventory" spy={true} smooth={true} offset={25} duration={500} href="ourinventory" onClick={toggleMobileMenu}><div className='mobile-nav-item'>our inventory</div></Link>
        </div>
        </div>
        <div className='flex max-width header'>
            {/* <img src={Logo} className='header-logo' alt="logo" /> */}
            <div className='only-mobile mobile-menu-button-wrapper'>
            <button class={`hamburger hamburger--spin ${showMobMenu && 'is-active' }`} type="button" onClick={toggleMobileMenu}>
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>  
            </div>
            <div className='non-mobile flex around'>
                <Link className="gg" to="whoarewe" spy={true} smooth={true} offset={25} duration={500} href="#whoareyou"><div className='header-nav-item'>what is this?</div></Link>     
                <Link className="gg" to="ourinventory" spy={true} smooth={true} offset={25} duration={500} href="ourinventory"><div className='header-nav-item'>our inventory</div></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Header