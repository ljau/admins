import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexContainer } from "..";
import { MenuOptions, colors } from "../../Library";
import { HelpTag, MenuOptionTag } from "./styled";

export const SideMenu = () => {
  const getMenuItems = MenuOptions.map((data) => {
    return (
      <FlexContainer botBorder key={data.option}>
        <FontAwesomeIcon
          icon={data.icon}
          color={colors.turquoise}
          style={{ width: "5%", height: "5%" }}
        />
        <MenuOptionTag>{data.option}</MenuOptionTag>
      </FlexContainer>
    );
  });

  return (
    <FlexContainer minHeight="80vh" jc="space-between" dir="column">
      <FlexContainer dir="column" height="90%">
        {getMenuItems}
      </FlexContainer>
      <FlexContainer height="10%">
        <HelpTag> Necesitas ayuda?</HelpTag>
      </FlexContainer>
    </FlexContainer>
  );
};
