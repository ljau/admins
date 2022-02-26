import React from "react";
import { FlexContainer } from "..";
import logoImage from "../../Library";
import { ImageContainer, NavBar } from "./styled";

export const TopBar = () => {
  return (
    <FlexContainer>
      <FlexContainer height="10vh" width="20%">
        <ImageContainer src={logoImage} />
      </FlexContainer>
      <NavBar>
        <h4>TopBar</h4>
      </NavBar>
    </FlexContainer>
  );
};
