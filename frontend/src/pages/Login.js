import React from "react";
import firebase from "firebase/compat/app";
import { firebaseApp, firebaseAuth } from "../Firebase"; //Needed for other firebase components to reference the app
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

var firebaseUi = new firebaseui.auth.AuthUI(firebaseAuth);

var FirebaseUiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  //signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  //tosUrl: "<your-tos-url>",
  // Privacy policy url.
  //privacyPolicyUrl: "<your-privacy-policy-url>",
};

export default function Login() {
  React.useEffect(() => {
    firebaseUi.start("#firebaseui-auth-container", FirebaseUiConfig);
  }, []);

  firebaseAuth.onAuthStateChanged((user) => {
    console.log(user);
  });

  return (
    <>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      {/* <p id="sign-in-status">sample text</p> */}
    </>
  );
}
