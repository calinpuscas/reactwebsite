import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  background: ${({ scrollNav }) => (scrollNav ? "#05060B" : "transparent")};
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #3bcfb2;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  font-family: 'Almarai', sans-serif;
  align-items: center;
  margin-left: 24px;
  font-weight: 900;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #F9F1E7;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #46b4b0;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #F9F1E7;
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
  color: #f9f1e7;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Almarai", sans-serif;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 5px solid #3bcfb2;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 5rem;
  background: #00c9ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #92fe9d,
    #00c9ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #92fe9d,
    #00c9ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  white-space: nowrap;
  padding: 7px 22px;
  color: #007873;
  font-size: 1.5rem;
  font-family: "Almarai", sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #1e9600; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ff0000,
      #fff200,
      #1e9600
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff0000, #fff200, #1e9600);
    color: #007873;
  }
`;
