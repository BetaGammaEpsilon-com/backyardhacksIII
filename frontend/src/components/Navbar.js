// Import packages
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Import assets
import logo from "../assets/images/tree-terraria-logo.png";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.lightBrown};
`;

export default function Navbar(props) {
  return (
    <Nav id="main-nav-bar">
      <img src={logo} alt="Logo"></img>
      <Link to="/">Home</Link>
      <Link to="checklist">Checklist</Link>
      {/* <Link>Map</Link>
    <Link>Login</Link>
    <Link>Settings</Link> */}
    </Nav>
  );
}
