import React from "react";
import jsLogo from "../../assets/tech/JS.svg";
import reactLogo from "../../assets/tech/React.svg";
import CssLogo from "../../assets/tech/CSS.svg";
import HtmlLogo from "../../assets/tech/HTML.svg";
import EthLogo from "../../assets/tech/ETH.svg";
import LinkLogo from "../../assets/tech/LINK.svg";
import {
  TechContainer,
  TechH1,
  TechLogos,
  JsIcon,
  ReactIcon,
  CssIcon,
  HtmlIcon,
  EthIcon,
  LinkIcon,
} from "./techElements";

export const Tech = () => {
  return (
    <>
      <TechContainer id="tech">
        <TechH1>TECH_</TechH1>
        <TechLogos>
          <JsIcon src={jsLogo}></JsIcon>
          <ReactIcon src={reactLogo}></ReactIcon>
          <CssIcon src={CssLogo}></CssIcon>
          <HtmlIcon src={HtmlLogo}></HtmlIcon>
          <EthIcon src={EthLogo}></EthIcon>
          <LinkIcon src={LinkLogo}></LinkIcon>
        </TechLogos>
      </TechContainer>
    </>
  );
};

export default Tech;
