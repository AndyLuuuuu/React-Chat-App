import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideMenuContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.blue3};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  transition: transform 250ms ease-in-out;
  transform: translateX(${props => (props.showMenu ? "0%" : "-150%")});
  @media (min-width: 68rem) {
    width: 50vw;
  }
`;

export const SideMenuTitle = styled.h1``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2rem;
  color: white;
  border-radius: 15px;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.blue1};
`;
