import React from "react";
import styled from "styled-components";
import Rating from "react-rating";

const Panel = styled.div`
  background-color: ${(props) => props.theme.colors.darkBrown};
`;

const Checkbox = styled.input``;

const Title = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.pureWhite};
`;

export default function ParkPanel(props) {
  console.log(props);
  return (
    <Panel className="park-panel">
      <Checkbox type="checkbox" checked={props.data.completed} />
      <Title>{props.data.name}</Title>
      <Rating />
    </Panel>
  );
}
