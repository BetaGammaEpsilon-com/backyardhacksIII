import React from "react";
import firebase from "firebase/compat/app";

export default function Login() {
  return (
    <>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      {/* <p id="sign-in-status">sample text</p> */}
    </>
  );
}
