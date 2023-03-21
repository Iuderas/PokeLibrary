import { Pokemon } from "pokenode-ts";
import { FC } from "react";

import { usePokemonsInfo } from "../../hooks/getPokemons";

import { PokemonCard } from "../PokemonCard";
import { IPokemonList } from "./interfaces";
import * as Styled from "./styles";

export const PokemonList: FC<IPokemonList> = ({ data, onClick }) => {
  const { getPokemonsDetails } = usePokemonsInfo();

  const pokemonDetailsList = data.map((pokemon) => {
    return getPokemonsDetails(pokemon.name);
  });

  const renderItem = (item: Pokemon, index: number) => {
    return (
      <PokemonCard
        key={index}
        id={item.id}
        name={item.name}
        img={item.sprites.front_default as string}
        type={item.types[0].type.name}
        moves={item.moves[0].move.name}
        onClick={onClick}
      ></PokemonCard>
    );
  };

  return (
    <Styled.GridList>
      {pokemonDetailsList.map((item, index) =>
        renderItem(item as unknown as Pokemon, index)
      )}
    </Styled.GridList>
  );
};
