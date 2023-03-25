import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: monospace;

  background-color: #b70303;

  margin: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 50px;

  font-weight: bolder;
`;

export const PokemonGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-wrap: wrap;
  gap: 10px;

  justify-content: center;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
`;

export const Label = styled.span`
  font-size: large;
  font-weight: bold;
  text-transform: initial;
`;
