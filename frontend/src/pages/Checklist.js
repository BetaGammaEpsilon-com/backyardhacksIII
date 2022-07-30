// Import packages
import React from "react";
import styled from "styled-components";

// Import components
import ParkPanel from "../components/ParkPanel";

// Import data TODO: delete this once
import sampleData from "../utils/samplePark.json";

const CategoryPanel = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  font-size: 3rem;
  color: ${(props) => props.theme.colors.pureWhite};
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

  const completedParkPanels = Object.keys(completedParks).map(function (
    key,
    index
  ) {
    return <ParkPanel data={completedParks[key]} />;
  });

  const uncompletedParkPanels = Object.keys(uncompletedParks).map(function (
    key,
    index
  ) {
    return <ParkPanel data={uncompletedParks[key]} />;
  });

  return (
    <div id="checklist">
      <p>checklist</p>
      <CategoryPanel id="completedPanel">
        <h1>Completed Parks</h1>
        {completedParkPanels}
      </CategoryPanel>
      <CategoryPanel id="uncompletedPanel">
        <h1>Uncompleted Parks</h1>
        {uncompletedParkPanels}
      </CategoryPanel>
    </div>
  );
}
