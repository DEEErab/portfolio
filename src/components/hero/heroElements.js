import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #c0d6df;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileHeroImg = styled.img`
  margin-top: 25vh;
  margin-right: 10vh;
  width: 70vw;
`;

export const NameTag = styled.h1`
  margin-top: 20vh;
  margin-right: 25vh;
  font-size: 1em;
  color: white;
`;

export const Social = styled.div`
  position: absolute;
  bottom: 1vh;
  display: grid;
  justify-content: end;
  grid-template-columns: 1fr 1fr 1fr;
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
