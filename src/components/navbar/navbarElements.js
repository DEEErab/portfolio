import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? "#DD6E42" : "transparent")};
  display: flex;
  height: 3rem;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.3s ease-in-out;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
`;

export const Logo = styled.p`
  padding: 0px 10px 0px 10px;
  color: white;
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

export const MobileIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 20%);
  font-size: 1.8rem;
  color: white;
  cursor: pointer;

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: none;

  @media screen and (min-width: 1080px) {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 20px;
  }
`;

export const NavLink = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #3f5c64;
    color: white;
  }
`;

export const NavItem = styled.li`
  height: 3rem;
`;
