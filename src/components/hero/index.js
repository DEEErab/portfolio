import React from "react";

import mobileImage from "../../assets/logos/mobile.svg";
import desktopImage from "../../assets/logos/desktop.svg";
import linkedInLogo from "../../assets/social/linkedIn.svg";
import twitterLogo from "../../assets/social/twitter.svg";
import githubLogo from "../../assets/social/github.svg";
import plane from "../../assets/matters/airplane.svg";
import cloud1 from "../../assets/matters/cloud1.svg";

import {
  HeroContainer,
  NameWrap,
  MobileHeroImg,
  DesktopHeroImg,
  NameTag,
  Social,
  LinkedInIcon,
  TwitterIcon,
  GithubIcon,
  LinkedInIconLink,
  TwitterIconLink,
  GithubIconLink,
  Plane,
  Cloud1,
} from "./heroElements";

export const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <Cloud1 src={cloud1}></Cloud1>
        <Plane src={plane}></Plane>
        <NameWrap>
          <NameTag>DALTON PHILLIPS</NameTag>
          <MobileHeroImg src={mobileImage}></MobileHeroImg>
          <DesktopHeroImg src={desktopImage}></DesktopHeroImg>
        </NameWrap>

        <Social>
          <LinkedInIconLink href="https://www.linkedin.com/in/dalton-phillips-4a7782156/">
            <LinkedInIcon src={linkedInLogo}></LinkedInIcon>
          </LinkedInIconLink>
          <TwitterIconLink href="https://twitter.com/DEEErab">
            <TwitterIcon src={twitterLogo}></TwitterIcon>
          </TwitterIconLink>
          <GithubIconLink href="https://github.com/DEEErab">
            <GithubIcon src={githubLogo}></GithubIcon>
          </GithubIconLink>
        </Social>
      </HeroContainer>
    </>
  );
};

export default Hero;
