// Import packages
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { firebaseApp, firebaseAuth } from "../Firebase"; //Needed for other firebase components to reference the app
import Popup from "reactjs-popup";

// Import assets
import logo from "../assets/images/compassLogo.svg";

// Import components
import DropDown from "../components/DropDown";
import Login from "../components/Login";

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

function NavLinkNew(props) {
  const activeStyle = {
    textDecoration: "none",
    textColor: "black",
  };

  const unactiveStyle = {
    textDecoration: "none",
  };

  return (
    <NavLink
      to={props.path}
      style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
    >
      <NavLinkText>{props.text}</NavLinkText>
    </NavLink>
  );
}

function Modal() {
  return (
    <Popup
      trigger={<button className="sign-in-button"> Sign In </button>}
      modal
    >
      <Login />
    </Popup>
  );
}

// TODO: Create component for Navigation bar link that includes the NavLink component, the text, and styles. Have the active class keep the item colored

export default function Navbar(props) {
  const [signInOutState, setSignInOutState] = useState(0);

  firebaseAuth.onAuthStateChanged((user) => {
    if (user) setSignInOutState(1);
    else setSignInOutState(0);
  });

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
          <NavLinkNew path="/" text="Home" />
          <NavLinkNew path="/checklist" text="Checklist" />
          {signInOutState ? <DropDown /> : <Modal />}
        </div>
      </div>
    </Nav>
  );
}
