import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./navbarElements";

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <Logo onClick={toggleHome} to="/">
            DP.
          </Logo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                _ABOUT ME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="tech"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                TECH_
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="work"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                _MY WORK
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                _CONTACT
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
