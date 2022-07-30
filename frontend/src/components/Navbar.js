// Import packages
import React from "react";
import { Link } from "react-router-dom";

// Import assets
import logo from "../assets/images/tree-terraria-logo.png";

export default function Navbar() {
  return (
    <div id="main-nav-bar">
      <nav>
        <img src={logo} alt="Logo"></img>
        <Link to="/">Home</Link>
        <Link to="checklist">Checklist</Link>
        {/* <Link>Map</Link>
        <Link>Login</Link>
        <Link>Settings</Link> */}
      </nav>
    </div>
  );
}
