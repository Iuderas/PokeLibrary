import React, { useState, useEffect } from "react";
import { PokemonCard } from "../PokemonCard";
import { usePokemonsInfo } from "../../hooks/getPokemons";
import { IPokemon } from "../../hooks/getPokemons/interfaces";

import * as Styled from "./styles";
import { usePokeClient } from "../../../clients/PokeNode";
import { NamedAPIResource } from "pokenode-ts";

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<NamedAPIResource[]>();
  const [selectedPokemon, setSelectedPokemon] = useState<
    NamedAPIResource | undefined
  >();
  const [pokemonDetails, setPokemonDetails] = useState<any | undefined>();
  const { getPokemons, getPokemonsDetails } = usePokemonsInfo();

  useEffect(() => {
    getPokemons({ limit: 151, offset: 0 }).then((response) => {
      setPokemons(response.results);
    });
  }, [getPokemons]);

  useEffect(() => {
    if (!selectedPokemon) return;

    getPokemonsDetails(selectedPokemon.name).then((response) => {
      setPokemonDetails(response);
    });
  }, [selectedPokemon, getPokemonsDetails]);

  return (
    <div>
      <Styled.Container>
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
      </Styled.Container>

      {/* {selectedPokemon && (
        <Styled.CardContainer>
          <Styled.Label>
            Pokemon Selecionado:{" "}
            {selectedPokemon?.name || "nenhum pokemon selecionado"}
          </Styled.Label> */}
      {/* <h3>Detalhes do pokemon selecionado:</h3> */}
      {/* <PokemonCard
            // onClick={() => {}}
            selectedPokemonDetails={pokemonDetails}
          />
        </Styled.CardContainer>
      )} */}
    </div>
  );
};
