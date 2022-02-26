import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexContainer } from "..";
import { MenuOptions, colors } from "../../Library";
import { MenuOptionTag } from "./styled";

export const SideMenu = () => {
  const getMenuItems = MenuOptions.map((data) => {
    return (
      <FlexContainer height="auto">
        <FontAwesomeIcon icon={data.icon} color={colors.turquoise} />
        <MenuOptionTag>{data.option}</MenuOptionTag>
      </FlexContainer>
    );
  });

  return (
    <FlexContainer minHeight="90vh" jc="space-between" dir="column">
      <FlexContainer dir="column" height="90%" >
        {getMenuItems}
      </FlexContainer>
      <FlexContainer height="5rem" >Necesitas ayuda?</FlexContainer>
    </FlexContainer>
  );
};
