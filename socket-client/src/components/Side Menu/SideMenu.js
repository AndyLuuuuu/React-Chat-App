import React from "react";
import { SideMenuContainer, SideMenuTitle, StyledLink } from "./SideMenuStyled";
import { connect } from "react-redux";
import { menuToggle } from "../../Redux/actions/showMenu";

const SideMenu = props => {
  return (
    <SideMenuContainer showMenu={props.menu.menuShow}>
      <SideMenuTitle>Chat App</SideMenuTitle>
      <StyledLink to="/" onClick={() => props.dispatch(menuToggle())}>
        Choose new username
      </StyledLink>
      <StyledLink to="/option" onClick={() => props.dispatch(menuToggle())}>
        Join or Create room
      </StyledLink>
    </SideMenuContainer>
  );
};

const mapStateToProps = ({ menu }) => {
  return {
    menu: menu
  };
};

export default connect(mapStateToProps)(SideMenu);
