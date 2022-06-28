import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;

  height: 100vh;
  width: 100vw;
  background-color: #c0d6df;
`;

export const HeroLogo = styled.div`
  position: absolute;
`;

export const HeroLogoTop = styled.p`
  height: 600px;
  padding-left: 10px;
  font-size: 7rem;
  color: white;
  transform: translateY(50%);
`;

export const HeroLogoB = styled.p`
  padding-left: 250px;
  height: ;
  font-size: 7rem;
  color: white;
  transform: rotate(30deg) translateY(50%);
`;

export const HeroLogoDev = styled.p`
  height: 1000px;
  font-size: 7rem;
  color: white;
  transform: translateY(50%);
`;
