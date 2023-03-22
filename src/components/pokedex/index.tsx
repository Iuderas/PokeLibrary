import React, { useState, useEffect } from "react";
import { PokemonCard } from "../PokemonCard";
import { usePokemonsInfo } from "../../hooks/getPokemons";

import * as Styled from "./styles";
import { NamedAPIResource } from "pokenode-ts";

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<NamedAPIResource[]>();

  const { getPokemonDetails, fetchPokemons, currentPokemon, pokemonList } =
    usePokemonsInfo();

  useEffect(() => {
    fetchPokemons({ limit: 151, offset: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pokemonList?.length) setPokemons(pokemonList);
  }, [fetchPokemons, pokemonList]);

  return (
    <Styled.Container>
      <Styled.Header>Pokédex</Styled.Header>

      <Styled.PokemonGrid>
        {pokemons &&
          pokemons.map((pokemon, index) => {
            return (
              <PokemonCard
                id={index}
                name={pokemon.name}
                url={pokemon.url}
                onClick={() => {
                  getPokemonDetails({ name: pokemon.name });
                }}
              />
            );
          })}
      </Styled.PokemonGrid>

      <Styled.Label>
        Pokemon Selecionado:{" "}
        {currentPokemon?.name || "nenhum pokemon selecionado"}
      </Styled.Label>

      {currentPokemon && (
        <Styled.PokemonContainer>
          <PokemonCard
            onClick={() => {}}
            name={currentPokemon.name}
            img={currentPokemon.sprites.front_default as string}
            id={currentPokemon.id}
            type={currentPokemon.types[0].type.name}
            moves={currentPokemon.moves[0].move.name}
          />
        </Styled.PokemonContainer>
      )}
    </Styled.Container>
  );
};
