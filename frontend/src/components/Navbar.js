// Import packages
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

// Import assets
import logo from "../assets/images/compassLogo.svg";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.lightBrown};
  width: 100%;
`;

const NavLinkText = styled.h3`
  font-size: 45px;
  color: ${(props) => props.theme.colors.pureWhite};
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.colors.tan};
    transition: color 500ms;
  }

  :not(:hover) {
    color: ${(props) => props.theme.colors.pureWhite};
    transition: color 500ms;
  }
`;

const NavBarContentStyle = {
  width: "1000px",
  margin: "auto",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
};

const NavBarTextStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  flex: "1 1 auto",
  justifyContent: "space-around",
  color: "white",
};

// TODO: Create component for Navigation bar link that includes the NavLink component, the text, and styles. Have the active class keep the item colored

export default function Navbar(props) {
  return (
    <Nav id="nav-bar">
      <div id="nav-bar-content" style={NavBarContentStyle}>
        <Link
          to="/"
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "5rem",
              padding: "0.5rem",
            }}
          ></img>
        </Link>
        <div id="nav-bar-text" style={NavBarTextStyle}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <NavLinkText>Home</NavLinkText>
          </NavLink>
          <Link to="checklist" style={{ textDecoration: "none" }}>
            <NavLinkText>Checklist</NavLinkText>
          </Link>
          {/* <Link>Map</Link>
        <Link>Login</Link>
        <Link>Settings</Link> */}
        </div>
      </div>
    </Nav>
  );
}
