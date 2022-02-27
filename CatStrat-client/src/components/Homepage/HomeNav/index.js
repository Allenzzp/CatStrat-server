import React from 'react';
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarCSS'
import { gsap } from 'gsap';
import { useEffect, useRef} from 'react';
import Paw from '@mui/icons-material/Pets';
import {animateScroll as scroll} from 'react-scroll'


function HomeNavbar() {
  let nav = useRef(null);

  useEffect(() => {
    gsap.to(nav, {duration: 2, autoAlpha: 1, delay: 2,})
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <Nav ref={el => nav = el}>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}><Paw />CatStrat</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks to='about' 
              smooth={true}
              duration={200}
              spy={true}
              exact='true'
              offset={10}
            >About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='discover'
              smooth={true}
              duration={200}
              spy={true}
              exact='true'
              offset={10}
            >Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='manage'
              smooth={true}
              duration={200}
              spy={true}
              exact='true'
              offset={15}  
            >Manage</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='signup'
              smooth={true}
              duration={200}
              spy={true}
              exact='true'
              offset={15}
            >Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default HomeNavbar;