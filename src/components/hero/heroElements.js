import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #c0d6df;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

export const NameWrap = styled.div`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 75px;
    left: 5vw;
    top: 30vh;
    position: absolute;
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
  margin-top: 5px;
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
  margin-top: 400px;

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

export const Plane = styled.img`
  margin-left: 75px;
  width: 250px;

  @media screen and (min-width: 768px) {
    width: 300px;
    top: 70vh;
    left: 70vw;
    position: absolute;
  }
`;

export const Cloud1 = styled.img`
  margin-left: 150px;
  width: 200px;

  @media screen and (min-width: 768px) {
    margin-left: 600px;
  }
`;

export const Cloud2 = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Cloud3 = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Line1 = styled.img`
  margin-left: 150px;

  @media screen and (min-width: 768px) {
    margin-left: 600px;
  }
`;

export const Line2 = styled.img`
  margin-left: 150px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Line3 = styled.img`
  margin-left: 150px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
