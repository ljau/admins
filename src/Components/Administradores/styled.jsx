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
  @media (max-width: 1080px) {
    border-top: 3px solid #d6d5d5;
    font-size: 350%;
  }
`;

export const SideContainer = styled.div`
  background-color: ${({ bg }) => bg ?? "transparent"};
  height: 100%;
  width: ${({ width }) => width ?? "100%"};
  min-height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-right: ${({ noRightBorder }) => (noRightBorder ? "0" : "1px solid #d6d5d5")};
  @media (max-width: 1080px) {
    padding: 2% 0 2%;
    align-items: center;
    width: 100%;
    min-height: 100%;
  }
`;

export const MainTable = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;
