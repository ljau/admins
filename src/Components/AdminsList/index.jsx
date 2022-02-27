import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AdminsTableBar, FlexContainer } from "..";
import { AdminsData, icons, pictures } from "../../Library";
import { ActiveTag, StyledCheckbox, UserPicture } from "./styled";

export const AdminsList = () => {
  const DetailsIcons = [
    { name: icons.faPenToSquare, color: "blue" },
    { name: icons.faTrashCan, color: "red" },
    { name: icons.faEye, color: "black" },
  ];

  const getDetailsIcons = DetailsIcons.map((detailsIcon) => {
    return (
      <FontAwesomeIcon key={detailsIcon.color} icon={detailsIcon.name} color={detailsIcon.color} />
    );
  });

  const getAdminsData = AdminsData.map((data) => {
    return (
      <FlexContainer key={data.name} height="4rem" botBorder >
        <FlexContainer width="10%" jc={"space-evenly"}>
          <StyledCheckbox />
          <UserPicture src={pictures[data.picture]} />
        </FlexContainer>
        <FlexContainer width="20%">
          <h4>{data.name}</h4>
        </FlexContainer>
        <FlexContainer width="20%">
          <h4>{data.area}</h4>
        </FlexContainer>
        <FlexContainer width="25%">
          <h4>{data.email}</h4>
        </FlexContainer>
        <FlexContainer width="10%">
          <ActiveTag status={data.status}>{data.status}</ActiveTag>
        </FlexContainer>
        <FlexContainer width="10%" jc="space-evenly">
          {getDetailsIcons}
        </FlexContainer>
      </FlexContainer>
    );
  });

  return (
    <FlexContainer minHeight="60vh" dir="column">
      <AdminsTableBar />
      {getAdminsData}
    </FlexContainer>
  );
};
