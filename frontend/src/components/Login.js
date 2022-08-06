import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import { firebaseApp, firebaseAuth, firebaseUi } from "../Firebase"; //Needed for other firebase components to reference the app

var FirebaseUiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  //signInFlow: "popup",
  signInSuccessUrl: "/checklist",
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

const modalStyle = {
  textAlign: "center",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#e6d6a6",
  backgroundColor: "#809b52",
  padding: "3px",
};

export default function Login() {
  useEffect(() => {
    firebaseUi.start("#firebaseui-auth-container", FirebaseUiConfig);
  }, []);

  //   firebaseAuth.onAuthStateChanged((user) => {
  //     if (user) console.log(user);
  //     else console.log(user);
  //   });

  return (
    <div className="modal" style={modalStyle}>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      {/* <p id="sign-in-status">sample text</p> */}
    </div>
  );
}
