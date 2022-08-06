// Import packages
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { firebaseAuth } from "../Firebase";
import Popup from "reactjs-popup";

// Import assets
import defaultProfilePic from "../assets/images/blank-profile-picture-973460.svg";

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    ...//
  }
  // use your custom style for ".popup-content"
  &-content {
    background: rgb(255, 255, 255);
    padding: 5px;

    li {
      cursor: pointer;
      text-align: right;
      padding: .5rem;
    }
  }
`;

const profPicStyle = {
  borderRadius: "50%",
  height: "4rem",
};

export default function DropDown() {
  function logOut() {
    firebaseAuth.signOut();
  }

  return (
    <>
      <StyledPopup
        trigger={
          <img
            src={defaultProfilePic}
            alt="Profile"
            style={profPicStyle}
            id="profile-pic"
          ></img>
        }
        position="bottom right"
        repositionOnResize={true}
      >
        <ul className="drop-down">
          <li>Settings</li>
          <li onClick={logOut}>Sign Out</li>
        </ul>
      </StyledPopup>
    </>
  );
}
