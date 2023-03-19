import styled from "styled-components";
import theme from "../../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 50px;
  font-family: monospace;
  font-weight: bolder;
`;

export const PokemonGrid = styled.div`
  width: 100%;
  max-height: auto;
  display: flexbox;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
`;

export const Button = styled.button`
  /* width: 100%; */
  height: 100%;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;

  :hover {
    background-color: rgba(0, 255, 0, 0.2);
    cursor: pointer;
  }
`;

export const Label = styled.span`
  font-size: large;
  font-weight: bold;
  text-transform: initial;
`;
