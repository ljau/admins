import styled from "styled-components";
import { colors } from "../../Library";

export const NavBar = styled.div`
  width: 80%;
  height: 10vh;
  background-color: ${colors.turquoise};
  display: flex;
  justify-content: flex-end;
`;

export const ImageContainer = styled.img`
  width: auto;
  height: auto;
  src: ${({ src }) => src ?? "undefined"};
`;
