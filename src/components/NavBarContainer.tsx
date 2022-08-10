import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { ReactNode } from "react";

const RootContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #222222;
`;

const NavBarDiv = styled.div`
  background-color: #000000;
  align-items: center;
  height: 2em;
  padding-left: 6%;
  font-size: 14px;
`;

const NavBarLink = styled(Link)`
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #b0b0b0;
  text-decoration: none;
  margin: 0 5px;
  padding: 0 8px;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    background-color: #161616;
    color: #ffffff;
  }
`;

export const NavBarContainer = ({children}: {children: ReactNode}) => {


  return <RootContainer>
    <NavBarDiv>
      <NavBarLink to="/">Home</NavBarLink>
    </NavBarDiv>
    {children}
  </RootContainer>
}