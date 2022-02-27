import styled from "styled-components";

export const FlexContainer = styled.div`
  background-color: ${({ bg }) => bg ?? "transparent"};
  height: ${({ height }) => height ?? "100%"};
  width: ${({ width }) => width ?? "100%"};
  display: flex;
  justify-content: ${({ jc }) => jc ?? "flex-start"};
  align-items: ${({ align }) => align ?? "center"};
  flex-direction: ${({ dir }) => dir ?? "row"};
  min-height: ${({ minHeight }) => minHeight ?? "undefined"};
  border-bottom: ${({ botBorder }) => (botBorder ? "1px solid #d6d5d5" : "0")};
  @media (max-width: 1080px) {
    justify-content: center;
  }
`;
