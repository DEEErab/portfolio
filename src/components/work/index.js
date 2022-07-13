import React from "react";
import {
  WorkContainer,
  WorkH1,
  WorkRow,
  Column1,
  Column2,
  Column3,
} from "./workElements";

export const Work = () => {
  return (
    <>
      <WorkContainer id="work">
        <WorkH1>_MY WORK</WorkH1>
        <WorkRow>
          <Column1></Column1>
          <Column2></Column2>
          <Column3></Column3>
        </WorkRow>
      </WorkContainer>
    </>
  );
};

export default Work;
