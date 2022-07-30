import React from "react";

// Import assets
import backgroundImg from "../assets/images/pexels-lukas-kloeppel-545964.jpg";

export default function HomePage() {
  return (
    <div id="homepage" style={{ overflow: "hidden" }}>
      <img
        src={backgroundImg}
        alt="National Park Canyon"
        id="homeBackgroundImg"
        style={{
          backgroundSize: "cover",
          height: "125vh",
          position: "relative",
          margin: "0px",
        }}
      ></img>
      <h1>Hi there,</h1>
      <p>check all your national parks off!</p>
      <p>First login, then you'll have access to all your data</p>
    </div>
  );
}
