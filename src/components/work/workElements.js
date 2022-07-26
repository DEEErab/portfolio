import styled from "styled-components";

export const WorkContainer = styled.div`
  height: 2000px;
  width: 100vw;
  background-color: #4f6d7a;
  @media screen and (min-width: 1080px) {
    height: 800px;
  }
`;

export const WorkH1 = styled.h1`
  padding-left: 100px;
  padding-top: 50px;
  font-size: 2rem;
  color: white;
`;

export const WorkRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 100px;
  place-items: center;

  @media screen and (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0;
  }
`;

export const Column1 = styled.div`
  margin-top: 120px;
  height: 500px;
  width: 300px;
  border-radius: 10px;
  background-color: white;
`;

export const Column2 = styled.div`
  height: 500px;
  width: 300px;
  border-radius: 10px;
  background-color: white;

  @media screen and (min-width: 1080px) {
    margin-top: 120px;
  }
`;

export const Column3 = styled.div`
  height: 500px;
  width: 300px;
  border-radius: 10px;
  background-color: white;

  @media screen and (min-width: 1080px) {
    margin-top: 120px;
  }
`;
