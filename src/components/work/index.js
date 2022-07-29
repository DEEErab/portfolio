import React from "react";
import line from "../../assets/matters/line.svg";
import planet from "../../assets/matters/planet.svg";
import satellite from "../../assets/matters/satellite.svg";
import {
  WorkContainer,
  WorkH1,
  WorkRow,
  Column1,
  Column2,
  Column3,
  Container,
  SolidLine,
  Planet,
  InfoContainer,
  Satellite,
} from "./workElements";

export const Work = () => {
  return (
    <>
      <WorkContainer id="work">
        <Container>
          <SolidLine src={line}></SolidLine>
          <Planet src={planet}></Planet>
          <Satellite src={satellite}></Satellite>
        </Container>

        <InfoContainer>
          <WorkH1>_MY WORK</WorkH1>
          <WorkRow>
            <Column1></Column1>
            <Column2></Column2>
            <Column3></Column3>
          </WorkRow>
        </InfoContainer>
      </WorkContainer>
    </>
  );
};

export default Work;
