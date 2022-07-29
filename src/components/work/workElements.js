import styled from "styled-components";

export const WorkContainer = styled.div`
  height: 2250px;
  width: 100vw;
  background-color: #4f6d7a;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 768px) {
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
  margin-left: 40px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  grid-gap: 50px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
  }
`;

export const Column1 = styled.div`
  margin-top: 400px;
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

  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const Column3 = styled.div`
  height: 500px;
  width: 300px;
  border-radius: 10px;
  background-color: white;

  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
`;

export const SolidLine = styled.img`
  position: absolute;
  top: 0;
  margin-left: 250px;
`;

export const Planet = styled.img`
  top: 0;
  width: 500px;
  position: absolute;
  padding-top: 100px;
  margin-right: 20px;
`;

export const InfoContainer = styled.div`
  position: absolute;
`;

export const Satellite = styled.img`
  bottom: 500px;
  width: 250px;
  position: absolute;
  margin-left: 200px;
`;
