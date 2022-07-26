import React from "react";
import mobileImage from "../../assets/logos/mobile.svg";
import linkedInLogo from "../../assets/social/linkedIn.svg";
import twitterLogo from "../../assets/social/twitter.svg";
import githubLogo from "../../assets/social/github.svg";

import {
  HeroContainer,
  MobileHeroImg,
  NameTag,
  Social,
  LinkedInIcon,
  TwitterIcon,
  GithubIcon,
  LinkedInIconLink,
  TwitterIconLink,
  GithubIconLink,
} from "./heroElements";

export const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <NameTag>DALTON PHILLIPS</NameTag>
        <MobileHeroImg src={mobileImage}></MobileHeroImg>
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
