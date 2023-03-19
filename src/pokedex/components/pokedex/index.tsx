import React, { useState, useEffect } from "react";
import { PokemonCard } from "../PokemonCard";
import { usePokemonsInfo } from "../../hooks/getPokemons";

import * as Styled from "./styles";
import { NamedAPIResource, Pokemon } from "pokenode-ts";

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<NamedAPIResource[]>();
  const [selectedPokemon, setSelectedPokemon] = useState<NamedAPIResource>();
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon>();

  const { getPokemons, getPokemonsDetails } = usePokemonsInfo();

  useEffect(() => {
    getPokemons({ limit: 151, offset: 0 }).then((response) => {
      setPokemons(response.results);
    });
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    getPokemonsDetails(selectedPokemon.name).then((response) => {
      setPokemonDetails(response);
    });
  }, [selectedPokemon]);

  return (
    <Styled.Container>
      <Styled.Header>Pokédex</Styled.Header>
      <Styled.PokemonGrid>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Styled.Button
              key={pokemon.url}
              onClick={() => {
                setSelectedPokemon(pokemon);
              }}
            >
              {pokemon.name}
            </Styled.Button>
          ))}
      </Styled.PokemonGrid>
      <Styled.Label>
        Pokemon Selecionado:{" "}
        {selectedPokemon?.name || "nenhum pokemon selecionado"}
      </Styled.Label>

      {selectedPokemon && pokemonDetails && (
        <Styled.PokemonContainer>
          <PokemonCard
            onClick={() => {}}
            name={pokemonDetails.name}
            img={pokemonDetails.sprites.front_default as string}
            id={pokemonDetails.id}
            type={pokemonDetails.types[0].type.name}
          />
        </Styled.PokemonContainer>
      )}
    </Styled.Container>
  );
};
