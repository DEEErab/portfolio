import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #c0d6df;
`;

export const MobileHeroImg = styled.img`
  width: 70vw;
  margin-top: 30vw;
  margin-left: 5vw;
`;

export const NameTag = styled.h1`
  font-size: 1em;
  color: white;
  padding-top: 20vh;
  padding-left: 5vw;
`;

export const Social = styled.div`
  position: absolute;
  bottom: 1vh;
  display: grid;
  justify-content: end;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10vw;
`;

export const LinkedInIcon = styled.img`
  width: 10vw;
`;

export const TwitterIcon = styled.img`
  width: 10vw;
`;

export const GithubIcon = styled.img`
  width: 10vw;
`;

export const DiscordIcon = styled.img`
  width: 10vw;
`;
