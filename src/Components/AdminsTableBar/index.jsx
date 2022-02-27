import React from "react";
import { ButtonsContainer, SearchIcon, TableHead } from "./styled";
import {
  FlexContainer,
  SearchButton,
  FilterButton,
  DownloadButton,
  AddAdminButton,
  SearchInput,
} from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Library";

export const AdminsTableBar = () => {
  const tableDetails = [
    { title: "Administradores", width: "20%" },
    { title: "Area", width: "25%" },
    { title: "Correo", width: "25%" },
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

  return (
    <>
      <ButtonsContainer jc="space-between" dir="row">
        <ButtonsContainer width="30%" jc="space-evenly">
          
          <FlexContainer dir="row" height="50%" width="50%">
            <SearchIcon icon={icons.faMagnifyingGlass} />
            <SearchInput placeholder="Buscar"></SearchInput>
          </FlexContainer>
          <SearchButton>Buscar</SearchButton>
          <FilterButton>
            <FontAwesomeIcon icon={icons.faFilter} />
          </FilterButton>

        </ButtonsContainer>
        <ButtonsContainer width="25%" jc="space-evenly">
          <DownloadButton>Descargar</DownloadButton>
          <AddAdminButton>Agregar Nuevo Admin</AddAdminButton>
        </ButtonsContainer>
      </ButtonsContainer>
      <TableHead>{getTableHeader}</TableHead>
    </>
  );
};
