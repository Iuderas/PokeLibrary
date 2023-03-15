import axios from "axios";
import * as I from "./interfaces";
import { usePokeClient } from "../../../clients/PokeNode";
import { useCallback } from "react";
import { Pokemon } from "pokenode-ts";

export const usePokemonsInfo = () => {
  const getPokemons = async (): Promise<I.IPokemonList> => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon?limit=151&offset=0`;

    const result = await axios.get<I.IPokemonList>(endpoint);

    return result.data;
  };

  const getPokemonsDetails = async (name: string) => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon/${name}`;

    const result = await axios.get<any>(endpoint);

    return result.data;
  };

  const getPokemonList = useCallback((list?: number) => {
    const data = usePokeClient
      .listPokemons(list)
      .then((response) => response)
      .catch((error) => console.log(error));

    return data;
  }, []);

  const getPokemonInfo = useCallback((name: string) => {
    const data = usePokeClient
      .getPokemonByName(name)
      .then((response) => response)
      .catch((error) => console.log(error));

    return data;
  }, []);

  return { getPokemonList, getPokemonsDetails, getPokemonInfo };
};
