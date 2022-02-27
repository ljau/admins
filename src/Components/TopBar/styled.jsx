import styled from "styled-components";
import { colors } from "../../Library";

export const NavBar = styled.div`
  width: 80%;
  height: 100%;
  background-color: ${colors.turquoise};
  display: flex;
  justify-content: flex-end;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  src: ${({ src }) => src ?? "undefined"};
`;
