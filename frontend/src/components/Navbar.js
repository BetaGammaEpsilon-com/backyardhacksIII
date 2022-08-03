// Import packages
import React from "react";
import { useState } from "react";
import { Link, NavLink, renderMatches } from "react-router-dom";
import styled from "styled-components";
import { firebaseApp, firebaseAuth } from "../Firebase"; //Needed for other firebase components to reference the app

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

function NavLinkNew(props) {
  //0 is signed out, 1 is signed in
  const [signInOutState, setSignInOutState] = useState(0);

  const activeStyle = {
    textDecoration: "none",
    textColor: "black",
  };

  const unactiveStyle = {
    textDecoration: "none",
  };

  if (props.func === "signInOut") {
  }

  firebaseAuth.onAuthStateChanged((user) => {
    console.log(user);
    if (user) setSignInOutState(1);
    else setSignInOutState(0);
  });

  function onClick(props) {
    if (props.func === "signInOut") {
      if (signInOutState === 1) {
        console.log(signInOutState);
        console.log("signing out");
        return firebaseAuth.signOut();
      } else return console.log("nothing");
    }
  }

  return (
    <NavLink
      to={props.path}
      style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
      onClick={onClick(props)}
      // props.func === "signInOut" ? firebaseAuth.signOut() : undefined
    >
      <NavLinkText>{props.text}</NavLinkText>
    </NavLink>
  );
}

// TODO: Create component for Navigation bar link that includes the NavLink component, the text, and styles. Have the active class keep the item colored

export default function Navbar(props) {
  const [signInOutText, setSignInOutText] = useState("Sign In");
  const [signInOutPath, setSignInOutPath] = useState("/");

  firebaseAuth.onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      setSignInOutText("Sign Out");
      setSignInOutPath("/");
    } else {
      setSignInOutText("Sign In");
      setSignInOutPath("/login"); //change this to /checklist once popup is implemented
    }
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
          <NavLinkNew
            path={signInOutPath}
            text={signInOutText}
            func="signInOut"
          />
          {/* <Link>Settings</Link> */}
        </div>
      </div>
    </Nav>
  );
}
