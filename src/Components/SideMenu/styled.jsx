import styled from "styled-components";

export const MenuOptionTag = styled.p`
  font-size: 1rem;
  padding-left: 5px;
  @media (max-width: 1080px) {
    font-size: 4rem;
    font-weight: bold;
  }
`;

export const HelpTag = styled.a`
  font-size: 1rem;
  padding-left: 5px;
  &:hover{
    color: blue;
  }
  @media (max-width: 1080px) {
    font-size: 2rem;
    font-weight: bold;  
  }  
`;
