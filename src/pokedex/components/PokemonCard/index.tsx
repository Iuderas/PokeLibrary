import React from "react";
import { IPokemonCard } from "./interfaces";
import * as Styled from "./styles";

export const PokemonCard: React.FC<IPokemonCard> = ({
  onClick,
  selectedPokemonDetails,
  selectedPokemon,
}) => {
  return (
    <Styled.Container>
      <Styled.Button onClick={onClick} />
      <Styled.Sprite src={selectedPokemonDetails.sprite.front_default} />
      <Styled.Label>
        {selectedPokemon?.name}
        {selectedPokemonDetails.id}
      </Styled.Label>
    </Styled.Container>
  );
};
