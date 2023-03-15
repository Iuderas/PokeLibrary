import React from "react";
import { IPokemonCard } from "./interfaces";
import * as Styled from "./styles";

export const PokemonCard: React.FC<IPokemonCard> = ({
  onClick,
  selectedPokemonDetails,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {/* <Styled.Button onClick={onClick} /> */}
        <Styled.Sprite
          src={selectedPokemonDetails?.sprites?.front_default as string}
        />
        <Styled.Label>{selectedPokemonDetails?.name}</Styled.Label>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
