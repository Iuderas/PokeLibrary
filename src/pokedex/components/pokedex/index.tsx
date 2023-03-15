import React, { useState, useEffect } from "react";
import { PokemonCard } from "../PokemonCard";
import { usePokemonsInfo } from "../../hooks/getPokemons";
import { IPokemon } from "../../hooks/getPokemons/interfaces";

import * as Styled from "./styles";
import { usePokeClient } from "../../../clients/PokeNode";

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<any>();
  const [selectedPokemon, setSelectedPokemon] = useState<
    IPokemon | undefined
  >();
  const [pokemonDetails, setPokemonDetails] = useState<any | undefined>();
  const { getPokemonList, getPokemonsDetails, getPokemonInfo } =
    usePokemonsInfo();

  const getNextPageFromList = () => {
    (async () =>
      await getPokemonList(151)
        .then((response) => {
          setPokemons(response?.next);
          console.log(response);
        })
        .catch((error) => {}))();
  };

  useEffect(() => {
    (async () =>
      await getPokemonList()
        .then((response) => {
          setPokemons(response);
          console.log(response);
        })
        .catch((error) => {}))();
  }, []);

  // useEffect(() => {
  //   getPokemons().then((response) => {
  //     setPokemons(response.results);
  //   });
  // }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    (async () =>
      await getPokemonInfo(selectedPokemon.name)
        .then((response) => {
          setPokemonDetails(response);
        })
        .catch((error) => {}))();
  }, [selectedPokemon]);

  return (
    <div>
      <h1>Pokédex</h1>

      <Styled.Container>
        {pokemons &&
          pokemons?.results?.map((pokemon: IPokemon) => (
            <Styled.Button
              key={pokemon.url}
              onClick={() => setSelectedPokemon(pokemon)}
            >
              {pokemon.name}
            </Styled.Button>
          ))}

        <Styled.Button onClick={() => getNextPageFromList()}>
          Next page
        </Styled.Button>
      </Styled.Container>

      <Styled.Label>
        Pokemon Selecionado:{" "}
        {selectedPokemon?.name || "nenhum pokemon selecionado"}
      </Styled.Label>

      {selectedPokemon && (
        <Styled.Container>
          <h3>Detalhes do pokemon selecionado:</h3>
          <PokemonCard
            onClick={() => {}}
            selectedPokemonDetails={pokemonDetails}
            selectedPokemon={selectedPokemon}
          ></PokemonCard>
        </Styled.Container>
      )}
    </div>
  );
};
