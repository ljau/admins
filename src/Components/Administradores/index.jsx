import React from "react";
import {
  TopBar,
  FlexContainer,
  SideMenu,
  AdminsList,  
} from "..";
import { Layout, MainTable, SideContainer, Title } from "./styled";

export const Administradores = () => {
  return (
    <Layout>
      <TopBar />
      <MainTable>
        <SideContainer width="16%">
          <SideMenu />
        </SideContainer>
        <SideContainer width="76%" noRightBorder>
          <Title>Administradores de la consola</Title>          
          <FlexContainer></FlexContainer>
          <AdminsList />
        </SideContainer>
      </MainTable>
    </Layout>
  );
};
