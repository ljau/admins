import React from "react";
import { FlexContainer } from "..";
import { pictures } from "../../Library";
import { ImageContainer, NavBar } from "./styled";

export const TopBar = () => {
  return (
    <FlexContainer height="10vh" >
      <FlexContainer width="20%" >
        <ImageContainer src={pictures[0]} />
      </FlexContainer>
      <NavBar />       
    </FlexContainer>
  );
};
