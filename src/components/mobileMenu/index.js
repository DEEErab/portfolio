import React from "react";
import {
  MobileContainer,
  Icon,
  CloseIcon,
  MobileWrapper,
  MobileMenus,
  MobileLink,
} from "./mobileMenuElements";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileWrapper>
        <MobileMenus>
          <MobileLink to="about" onClick={toggle}>
            ABOUT
          </MobileLink>
          <MobileLink to="tech" onClick={toggle}>
            TECH
          </MobileLink>
          <MobileLink to="work" onClick={toggle}>
            WORK
          </MobileLink>
          <MobileLink to="contact" onClick={toggle}>
            CONTACT
          </MobileLink>
        </MobileMenus>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default MobileMenu;
