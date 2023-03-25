import React, { useEffect } from "react";
import { usePokemonsInfo } from "../../hooks/getPokemons";
import { IPokemonCard } from "./interfaces";
import * as Styled from "./styles";

export const PokemonCard: React.FC<IPokemonCard> = ({
  onClick,
  img,
  id,
  name,
  type,
  url,
  moves,
}) => {
  const { getPokemonDetails, currentPokemon } = usePokemonsInfo();

  useEffect(() => {
    getPokemonDetails({ url });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPokemon]);

  return (
    <Styled.Container>
      <Styled.Button onClick={onClick} />
      <Styled.IdLabel>#{currentPokemon?.id}</Styled.IdLabel>
      <Styled.Sprite
        src={img || (currentPokemon?.sprites.front_default as string)}
        alt="pokemon-display"
      />
      <Styled.Label>{name || currentPokemon?.name}</Styled.Label>
      {moves && (
        <Styled.Label>
          {moves || JSON.stringify(currentPokemon?.moves)}
        </Styled.Label>
      )}
    </Styled.Container>
  );
};
