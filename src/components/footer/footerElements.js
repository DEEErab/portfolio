import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 100vw;
  background-color: #dd6e42;
`;

export const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 20px;
`;

export const LinkedInIcon = styled.img`
  width: 10vw;
`;

export const LinkedInIconLink = styled.a`
  width: 10vw;
`;

export const TwitterIcon = styled.img`
  width: 10vw;
`;

export const TwitterIconLink = styled.a`
  width: 10vw;
`;

export const GithubIcon = styled.img`
  width: 10vw;
`;

export const GithubIconLink = styled.a`
  width: 10vw;
`;

export const CopyRight = styled.h1`
  margin-top: 20px;
  font-size: 1rem;
  color: white;
`;
