import React, { useEffect } from "react";
import { usePokemonsInfo } from "../../hooks/getPokemons";
import { IPokemonCard } from "./interfaces";
import * as Styled from "./styles";

export const PokemonCard: React.FC<IPokemonCard> = ({ onClick, url }) => {
  const { getPokemonDetails, currentPokemon } = usePokemonsInfo();

  useEffect(() => {
    getPokemonDetails({ url });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <Styled.Container>
      <Styled.Button onClick={onClick} />
      <Styled.IdLabel>#{currentPokemon?.id}</Styled.IdLabel>
      <Styled.Sprite
        src={currentPokemon?.sprites.front_default as string}
        alt="pokemon-display"
      />
      <Styled.Label>{currentPokemon?.name}</Styled.Label>
    </Styled.Container>
  );
};
