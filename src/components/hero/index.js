import React from "react";
import mobileImage from "../../assets/logos/mobile.svg";
import linkedInLogo from "../../assets/social/linkedIn.svg";
import twitterLogo from "../../assets/social/twitter.svg";
import githubLogo from "../../assets/social/github.svg";
import discordLogo from "../../assets/social/discord.svg";
import {
  HeroContainer,
  MobileHeroImg,
  NameTag,
  Social,
  LinkedInIcon,
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from "./heroElements";

export const Hero = () => {
  return (
    <>
      <HeroContainer id="home">
        <NameTag>DALTON PHILLIPS</NameTag>
        <MobileHeroImg src={mobileImage}></MobileHeroImg>
        <Social>
          <LinkedInIcon src={linkedInLogo}></LinkedInIcon>
          <TwitterIcon src={twitterLogo}></TwitterIcon>
          <GithubIcon src={githubLogo}></GithubIcon>
          <DiscordIcon src={discordLogo}></DiscordIcon>
        </Social>
      </HeroContainer>
    </>
  );
};

export default Hero;
