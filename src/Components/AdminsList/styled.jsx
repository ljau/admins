import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../Library";

export const CustomIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;

  @media (max-width: 1080px) {
    height: 5rem;
    width: 5rem;
  }
  &:hover {
    zoom: 1.5;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  &:checked {
    filter: invert(100%) hue-rotate(18deg) brightness(1.7);
  }
  &:hover {
    filter: contrast(120%);
  }
  @media (max-width: 1080px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const ActiveTag = styled.h4`
  border-radius: 2px;
  ${({ status }) => {
    switch (status) {
      case "ACTIVO":
        return `
          color: ${colors.green};
          background-color: ${colors.ligthGreen};
        `;
      case "INACTIVO":
        return `
          color: ${colors.red};
          background-color: ${colors.lightRed};
        `;
      default:
        break;
    }
  }}
  @media (max-width: 1080px) {
    font-size: 300%;
  }
  &:hover {
    zoom: 1.5;
  }
`;

export const UserPicture = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  src: ${({ src }) => src ?? "undefined"};
  @media (max-width: 1080px) {
    width: 15rem;
    height: 15rem;

    justify-content: center;
    flex-direction: column;
  }
  &:hover {
    zoom: 1.5;
  }
`;

export const AdminsTable = styled.div`
  background-color: ${({ bg }) => bg ?? "transparent"};
  height: ${({ height }) => height ?? "100%"};
  width: ${({ width }) => width ?? "100%"};
  display: flex;
  justify-content: "flex-start";
  align-items: center;
  min-height: ${({ minHeight }) => minHeight ?? "undefined"};
  border-bottom: ${({ botBorder }) => (botBorder ? "1px solid #d6d5d5" : "0")};

  @media (max-width: 1080px) {
    padding: 2rem 0 2rem;
    height: 100%;
    min-height: 0;
    justify-content: center;
    flex-direction: column;
    border-top: ${({ botBorder }) =>
      botBorder ? "5px solid #d6d5d5" : "0"};
  }
`;

export const TableElements = styled.p`
  font-size: 20px;
  @media (max-width: 1080px) {
    font-size: 300%;
  }
`;

export const TableCell = styled.div`
  height: ${({ height }) => height ?? "100%"};
  width: ${({ width }) => width ?? "100%"};
  display: flex;
  justify-content: ${({ jc }) => jc ?? "center"};
  align-items: ${({ align }) => align ?? "center"};
  @media (max-width: 1080px) {
    justify-content: ${({ jc }) => jc ?? "center"};
    align-items: center;
    width: 100%;
  }
`;
