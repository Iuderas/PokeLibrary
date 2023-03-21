import React from "react";
import { IPokemonCard } from "./interfaces";
import * as Styled from "./styles";

export const PokemonCard: React.FC<IPokemonCard> = ({
  onClick,
  img,
  id,
  name,
  type,
  moves,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {/* <Styled.Button onClick={onClick} /> */}
        <Styled.Sprite src={img} alt="pokemon-display" />
        <Styled.Label>{type}</Styled.Label>
        <Styled.Label>{moves}</Styled.Label>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
