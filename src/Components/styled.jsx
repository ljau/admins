import styled from "styled-components";
import { colors } from "../Library";

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

export const SearchButton = styled.button`
  height: 3rem;
  width: 5rem;
  background-color: ${colors.lightGray};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  @media (max-width: 1080px) {
    height: 7rem;
    width: 12rem;
    font-size: 300%;
  }
  &:hover {
    filter: contrast(120%);
  }
`;

export const FilterButton = styled.button`
  height: 3rem;
  width: 3rem;
  background-color: ${colors.turquoise};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  font-size: 18px;
  @media (max-width: 1080px) {
    height: 7rem;
    width: 7rem;
    font-size: 300%;
  }
  &:hover {
    filter: contrast(120%);
  }
`;
export const DownloadButton = styled.button`
  height: 3rem;
  width: auto;
  background-color: transparent;
  border: 2px solid ${colors.turquoise};
  border-radius: 5px;
  font-size: 18px;
  padding: 10px;

  @media (max-width: 1080px) {
    height: 7rem;
    width: 25rem;
    font-size: 300%;
  }
  &:hover {
    filter: brightness(80%);
  }
`;
export const AddAdminButton = styled.button`
  height: 3rem;
  width: auto;
  background-color: ${colors.turquoise};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  @media (max-width: 1080px) {
    height: 7rem;
    width: 25rem;
    font-size: 300%;
  }
  &:hover {
    filter: contrast(120%);
  }
`;

export const SearchInput = styled.input`
  height: 3rem;
  width: 15rem;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  @media (max-width: 1080px) {
    height: 7rem;
    width: 25rem;
    font-size: 300%;
  }
  &:hover {
    filter: contrast(120%);
  }
`;
