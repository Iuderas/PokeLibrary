import React, { useState, useEffect } from "react";
import { PokemonCard } from "../PokemonCard";
import { getPokemons, getPokemonsDetails } from "../../hooks/getPokemons";
import { IPokemon } from "../../hooks/getPokemons/interfaces";

import * as Styled from "./styles";

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    IPokemon | undefined
  >();
  const [pokemonDetails, setPokemonDetails] = useState<any | undefined>();

  console.log({});

  useEffect(() => {
    getPokemons().then((response) => {
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
    <div>
      <h1>Pokédex</h1>

      <h2>
        <Styled.Container>
          {pokemons.map((pokemon: IPokemon) => (
            <Styled.Button
              key={pokemon.url}
              onClick={() => setSelectedPokemon(pokemon)}
            >
              {pokemon.name}

              <Styled.Label key={pokemon.url}></Styled.Label>
            </Styled.Button>
            // <PokemonCard
            //   onClick={() => setSelectedPokemon(pokemon)}
            //   selectedPokemonDetails={pokemonDetails}
            //   selectedPokemon={selectedPokemon}
            // ></PokemonCard>
          ))}
        </Styled.Container>
      </h2>

      <h2>
        Pokemon Selecionado:{" "}
        {selectedPokemon?.name || "nenhum pokemon selecionado"}
      </h2>

      {selectedPokemon && (
        <h3>
          Detalhes do pokemon selecionado: {JSON.stringify(pokemonDetails)}
        </h3>
      )}
    </div>
  );
};
