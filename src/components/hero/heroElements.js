import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #c0d6df;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }
`;

export const MobileHeroImg = styled.img`
  margin-top: 25vh;
  margin-right: 5vw;
  width: 70vw;

  @media screen and (min-width: 1080px) {
    max-width: 600px;
  }
`;

export const NameTag = styled.h1`
  margin-top: 20vh;
  margin-right: 25vh;
  font-size: 1em;
  color: white;
`;

export const Social = styled.div`
  position: absolute;
  right: 20px;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  display: grid;

  @media screen and (max-width: 1080px) {
    bottom: 1vh;
    right: 25vw;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10vw;
    justify-content: end;
  }
`;

export const LinkedInIcon = styled.img`
  width: 50px;

  @media screen and (min-width: 1080px) {
    width: 50px;
  }
`;

export const LinkedInIconLink = styled.a`
  width: 50px;

  @media screen and (min-width: 1080px) {
    width: 50px;
  }
`;

export const TwitterIcon = styled.img`
  width: 50px;

  @media screen and (min-width: 1080px) {
    width: 50px;
  }
`;

export const TwitterIconLink = styled.a`
  width: 50px;

  @media screen and (min-width: 1080px) {
    width: 50px;
  }
`;

export const GithubIcon = styled.img`
  width: 50px;

  @media screen and (min-width: 1080px) {
    width: 50px;
  }
`;

export const GithubIconLink = styled.a`
  width: 50px;

  @media screen and (min-width: 1080px) {
    width: 50px;
  }
`;
