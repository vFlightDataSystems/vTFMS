import React from "react";
import { HubProvider } from "./hooks/useHub";
import styled from "styled-components";

const TfmsDiv = styled.div`
  display: flex;
  background-color: #222222;
`;

const Tfms = () => {
  return <TfmsDiv>
    TEST
  </TfmsDiv>;
}

export const TfmsProvider = () => (
  <HubProvider>
    <React.StrictMode>
      <Tfms />
    </React.StrictMode>
  </HubProvider>
);
