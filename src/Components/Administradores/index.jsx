import React from "react";
import { colors } from "../../Library";
import { TopBar, FlexContainer, SideMenu, AdminsList } from "..";
import { Layout, SideContainer, Title } from "./styled";

export const Administradores = () => {
  return (
    <Layout>
      <TopBar />
      <FlexContainer>
        <SideContainer width="16%">
          <SideMenu />
        </SideContainer>
        <SideContainer width="76%">
          <Title>Administradores de la consola</Title>
          <AdminsList/>
        </SideContainer>
      </FlexContainer>
    </Layout>
  );
};
