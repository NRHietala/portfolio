import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8x all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
  max-width: 1500px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 2px;
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${props => props.theme.subText};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.subText};
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.primary};
  }

  &.active {
    border-bottom: 3px solid ${props => props.theme.secondary};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: ${props => props.theme.primary};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${props => props.theme.bgColor};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.subText};
  }
`;
