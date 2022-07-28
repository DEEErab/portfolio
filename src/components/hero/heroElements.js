import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #c0d6df;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NameWrap = styled.div`
  margin-top: 300px;
  @media screen and (min-width: 768px) {
    margin-left: 75px;
  }
`;

export const MobileHeroImg = styled.img`
  margin-top: 25px;
  margin-right: 50px;
  width: 300px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DesktopHeroImg = styled.img`
  margin-top: 75px;
  margin-right: 50px;
  width: 800px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NameTag = styled.h1`
  margin-top: 75px;
  margin-left: 20px;
  font-size: 1em;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
`;

export const Social = styled.div`
  position: absolute;
  right: 20px;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  display: grid;

  @media screen and (max-width: 768px) {
    bottom: 1vh;
    right: 25vw;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10vw;
    justify-content: end;
  }
`;

export const LinkedInIcon = styled.img`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const LinkedInIconLink = styled.a`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const TwitterIcon = styled.img`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const TwitterIconLink = styled.a`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const GithubIcon = styled.img`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const GithubIconLink = styled.a`
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const Plane = styled.img``;

export const Cloud1 = styled.img``;
