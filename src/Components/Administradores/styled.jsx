import styled from "styled-components";

export const Layout = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
`;

export const SideContainer = styled.div`
  background-color: ${({ bg }) => bg ?? "transparent"};
  height: 100%;
  width: ${({ width }) => width ?? "100%"};
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2% 0;
  @media (max-width: 1080px) {
    width: 100%;
    align-items: center;
    min-height: 100%;
  }
`;
