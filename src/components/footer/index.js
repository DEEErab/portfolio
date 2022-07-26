import React from "react";
import linkedInLogo from "../../assets/social/linkedIn.svg";
import twitterLogo from "../../assets/social/twitter.svg";
import githubLogo from "../../assets/social/github.svg";
import {
  FooterContainer,
  Social,
  LinkedInIcon,
  LinkedInIconLink,
  TwitterIcon,
  TwitterIconLink,
  GithubIcon,
  GithubIconLink,
  CopyRight,
} from "./footerElements";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <CopyRight>© 2022 DALTON PHILLIPS</CopyRight>
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
      </FooterContainer>
    </>
  );
};

export default Footer;
