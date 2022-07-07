import React from "react";
import { InfoContainer, InfoTitle, InfoSection, Info } from "./aboutElements";

export const About = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoTitle>_ABOUT ME</InfoTitle>
        <InfoSection>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet elit a quam vestibulum porta. Nam mattis viverra sem eget
            consectetur. Ut et molestie tellus. Cras non pellentesque tortor.
            Quisque efficitur elit leo. In tellus urna, vestibulum ut dolor ut,
            porttitor blandit lacus. Etiam aliquam, erat ac rhoncus laoreet,
            tellus lacus venenatis urna, id mattis ipsum ligula ut enim. Integer
            vel enim eu dui tempor commodo. Ut ornare convallis fermentum. In
            nec augue suscipit, ornare nulla nec, luctus neque. In ornare, dui
            ut auctor maximus, nulla turpis scelerisque nisi, maximus
            condimentum diam justo at leo. In vestibulum nisl tellus, at
            fringilla nunc auctor quis.
          </Info>
        </InfoSection>
      </InfoContainer>
    </>
  );
};

export default About;
