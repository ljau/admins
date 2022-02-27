import React from "react";
import { AdminsTableBar, FlexContainer } from "..";
import { AdminsData, icons, pictures } from "../../Library";
import {
  ActiveTag,
  AdminsTable,
  StyledCheckbox,
  TableElements,
  TableCell,
  UserPicture,
  CustomIcon,
} from "./styled";

export const AdminsList = () => {
  const DetailsIcons = [
    { name: icons.faPenToSquare, color: "blue" },
    { name: icons.faTrashCan, color: "red" },
    { name: icons.faEye, color: "black" },
  ];

  const getDetailsIcons = DetailsIcons.map((detailsIcon) => {
    return (      
      <CustomIcon key={detailsIcon.color}
      icon={detailsIcon.name}
      color={detailsIcon.color}/>      
    );
  });

  const getAdminsData = AdminsData.map((data) => {
    return (
      <AdminsTable key={data.name} height="4rem" botBorder>
        <TableCell width="5%" jc="flex-start">
          <StyledCheckbox />
        </TableCell>
        <TableCell width="10%">
          <UserPicture src={pictures[data.picture]} />
        </TableCell>
        <TableCell width="15%" >
          <strong><TableElements>{data.name}</TableElements></strong>
        </TableCell>
        <TableCell width="20%">
          <TableElements>{data.area}</TableElements>
        </TableCell>
        <TableCell width="25%">
          <TableElements>{data.email}</TableElements>
        </TableCell>
        <TableCell width="15%">
          <ActiveTag status={data.status}>{data.status}</ActiveTag>
        </TableCell>
        <TableCell width="10%" jc="space-evenly">
          {getDetailsIcons}
        </TableCell>
      </AdminsTable>
    );
  });

  return (
    <FlexContainer minHeight="60vh" dir="column">
      <AdminsTableBar />
      {getAdminsData}
    </FlexContainer>
  );
};
