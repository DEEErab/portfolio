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
  margin-top: 10vh;

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
`;

export const LinkedInIconLink = styled.a`
  width: 50px;
`;

export const TwitterIcon = styled.img`
  width: 50px;
`;

export const TwitterIconLink = styled.a`
  width: 50px;
`;

export const GithubIcon = styled.img`
  width: 50px;
`;

export const GithubIconLink = styled.a`
  width: 50px;
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
    display: block;
    width: 200px;
    top: 250px;
    left: 900px;
    position: absolute;
  }
`;

export const Cloud2 = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 400px;
    top: 230px;
    left: 375px;
    position: absolute;
  }
`;

export const Cloud3 = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 300px;
    top: 330px;
    right: 10px;
    position: absolute;
  }
`;

export const Line1 = styled.img`
  background-color: black;
  margin-left: 150px;

  @media screen and (min-width: 768px) {
    display: block;
    top: 0;
    left: 1000px;
    position: absolute;
    width: 2px;
    height: 250px;
  }
`;

export const Line2 = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    background-color: black;
    display: block;
    top: 0;
    left: 400px;
    position: absolute;
    width: 2px;
    height: 345px;
  }
`;

export const Line3 = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    background-color: black;
    display: block;
    top: 0;
    left: 700px;
    position: absolute;
    width: 2px;
    height: 325px;
  }
`;

export const Line4 = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    background-color: black;
    display: block;
    top: 0;
    right: 250px;
    position: absolute;
    width: 2px;
    height: 425px;
  }
`;

export const Line5 = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    background-color: black;
    display: block;
    top: 0;
    right: 50px;
    position: absolute;
    width: 2px;
    height: 425px;
  }
`;
