import styled from "styled-components";
import { colors } from "../../Library";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  &:checked {
    filter: invert(100%) hue-rotate(18deg) brightness(1.7);
  }
  &:hover {
    filter: brightness(80%);
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
`;

export const UserPicture = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  src: ${({ src }) => src ?? "undefined"};
`;
