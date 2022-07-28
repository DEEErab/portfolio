import styled from "styled-components";

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 100vw;
  background-color: #c0d6df;

  @media screen and (min-width: 768px) {
    height: 400px;
  }
`;

export const TechH1 = styled.h1`
  padding-top: 50px;
  margin-right: 100px;
  color: white;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    margin-right: 600px;
  }
`;

export const TechLogos = styled.div`
  display: grid;
  padding-top: 50px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 75px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const JsIcon = styled.img``;

export const ReactIcon = styled.img``;

export const CssIcon = styled.img``;

export const HtmlIcon = styled.img``;

export const EthIcon = styled.img``;

export const LinkIcon = styled.img``;
