import axios from "axios";
import * as I from "./interfaces";
import {
  NamedAPIResource,
  NamedAPIResourceList,
  Pokemon,
  PokemonSprites,
  PokemonType,
} from "pokenode-ts";
import { useState } from "react";

export const usePokemonsInfo = () => {
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>();
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();
  const [sprite, setSprite] = useState<PokemonSprites>();
  const [id, setId] = useState<number>();
  const [type, setType] = useState<PokemonType[]>();

  const fetchPokemons = async ({ limit, offset }: I.IGetPokemons) => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon?limit=${limit}&offset=${offset}`;

    const result = await axios.get<NamedAPIResourceList>(endpoint);

    setPokemonList(result.data.results);
  };

  const getPokemonDetails = async ({ name, url }: I.IGetPokemonsDetails) => {
    const endpoint = url
      ? url
      : `${process.env.REACT_APP_POKE_API}/pokemon/${name}`;

    const result = await axios.get<Pokemon>(endpoint);

    setCurrentPokemon(result.data);
  };

  const getPokemonSprites = async (name: string) => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon/${name}`;

    const result = (await axios.get<Pokemon>(endpoint)).data.sprites;

    setSprite(result);
  };

  const getPokemonId = async (name: string) => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon/${name}`;

    const result = (await axios.get<Pokemon>(endpoint)).data.id;

    setId(result);
  };

  const getPokemonType = async (name: string) => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon/${name}`;

    const result = (await axios.get<Pokemon>(endpoint)).data.types;

    setType(result);
  };

  return {
    fetchPokemons,
    getPokemonDetails,
    getPokemonSprites,
    currentPokemon,
    pokemonList,
    sprite,
    id,
    getPokemonId,
    type,
    getPokemonType,
  };
};
