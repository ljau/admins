import React from "react";
import { FlexContainer } from "..";

export const AdminsTableBar = () => {
  const tableDetails = [
    { title: "Administreadores", width: "20%" },
    { title: "Area", width: "25%" },
    { title: "Correo", width: "20%" },
    { title: "Estatus", width: "20%" },
    { title: "Detalles", width: "10%" },
  ];

  const getTableHeader = tableDetails.map((data) => {
    return (
      <FlexContainer jc="space-evenly" width={data.width} key={data.title}>
        <h4>{data.title}</h4>
      </FlexContainer>
    );
  });

  return <FlexContainer heigth="20px" bg="yellow" >{getTableHeader}</FlexContainer>;
};
