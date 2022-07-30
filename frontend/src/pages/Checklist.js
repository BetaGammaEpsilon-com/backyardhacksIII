// Import packages
import React from "react";
import styled from "styled-components";

// Import components
import ParkPanel from "../components/ParkPanel";

// Import data TODO: delete this once
import sampleData from "../utils/samplePark.json";

const CategoryPanel = styled.div`
  background-color: green;
`;

export default function Checklist() {
  let completedParks = {};
  let uncompletedParks = {};

  for (var park in sampleData) {
    if (sampleData[park].completed === true) {
      completedParks[park] = sampleData[park];
    }
    if (sampleData[park].completed === false) {
      uncompletedParks[park] = sampleData[park];
    }
  }

  return (
    <div id="checklist">
      <p>checklist</p>
      <ParkPanel />
    </div>
  );
}
