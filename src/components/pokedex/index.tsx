import React, { useState, useEffect } from "react";
import { PokemonCard } from "../PokemonCard";
import { ArrowButton } from "../ArrowButton";
import { usePokemonsInfo } from "../../hooks/getPokemons";

import * as Styled from "./styles";
import { NamedAPIResource } from "pokenode-ts";

export const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<NamedAPIResource[]>();
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(18);

  const { getPokemonDetails, fetchPokemons, currentPokemon, pokemonList } =
    usePokemonsInfo();

  const handleNextButton = () => {
    if (offset === 126) setLimit(7);

    setOffset(offset + 18);
  };

  const handlePrevButton = () => {
    if (limit <= 18) setLimit(18);

    setOffset(offset - 18);
  };

  useEffect(() => {
    fetchPokemons({ limit: limit, offset: offset });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    if (pokemonList?.length) setPokemons(pokemonList);
  }, [fetchPokemons, pokemonList, offset]);

  return (
    <Styled.Container>
      <Styled.Header>Pokédex</Styled.Header>
      <Styled.ContentWrapper>
        <ArrowButton
          onClick={() => handlePrevButton()}
          disabled={offset <= 0}
          backgroundColor="#ff2d2d"
          color="#000000"
          buttonSize={40}
          rotate={180}
        />
        <Styled.PokemonGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <PokemonCard
                  key={index}
                  name={pokemon.name}
                  url={pokemon.url}
                  onClick={() => {
                    getPokemonDetails({ name: pokemon.name });
                  }}
                />
              );
            })}
        </Styled.PokemonGrid>

        <ArrowButton
          onClick={() => handleNextButton()}
          disabled={offset >= 140}
          backgroundColor="#ff2d2d"
          color="#000000"
          buttonSize={40}
        />
      </Styled.ContentWrapper>
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
