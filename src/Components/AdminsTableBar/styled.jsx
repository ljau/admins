import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../Library";

export const TableHead = styled.div`
  background-color: ${({ bg }) => bg ?? "transparent"};
  height: 20px;
  width: ${({ width }) => width ?? "100%"};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
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
    width: 95%;
    height: 22rem;
    justify-content: space-between;
    align-items: ${({ align }) => align ?? "center"};
    flex-direction: ${({ dir }) => dir ?? "column"};
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  color: ${colors.gray};

  @media (max-width: 1080px) {
    height: 5rem;
    width: 5rem;
  }

`;
