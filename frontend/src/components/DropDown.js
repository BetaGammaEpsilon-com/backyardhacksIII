// Import packages
import React from "react";

// Import assets
import defaultProfilePic from "../assets/images/blank-profile-picture-973460.svg";

export default function DropDown(props) {
  const testProp = ["Settings", "Sign Out"];

  return (
    <>
      <img src={defaultProfilePic} alt="Profile"></img>
    </>
  );
}
