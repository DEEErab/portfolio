import React from "react";
import {
  HeroContainer,
  HeroLogoTop,
  HeroLogo,
  HeroLogoB,
  HeroLogoDev,
} from "./heroElements";

export const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroLogo>
          <HeroLogoTop>WE</HeroLogoTop>
          <HeroLogoB>B</HeroLogoB>
          <HeroLogoDev>DE_V</HeroLogoDev>
        </HeroLogo>
      </HeroContainer>
    </>
  );
};

export default Hero;
