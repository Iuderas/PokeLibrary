import axios from "axios";
import * as I from "./interfaces";
import { usePokeClient } from "../../../clients/PokeNode";
import { useCallback } from "react";
import { NamedAPIResourceList, Pokemon } from "pokenode-ts";

export const usePokemonsInfo = () => {
  const getPokemons = async ({
    limit,
    offset,
  }: I.IGetPokemons): Promise<NamedAPIResourceList> => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon?limit=${limit}&offset=${offset}`;

    const result = await axios.get<NamedAPIResourceList>(endpoint);

    return result.data;
  };

  const getPokemonsDetails = async (name: string): Promise<Pokemon> => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon/${name}`;

    const result = await axios.get<any>(endpoint);

    return result.data;
  };

  // const getPokemonList = useCallback((list?: number, offset?: number) => {
  //   const data = usePokeClient
  //     .listPokemons(list, offset)
  //     .then((response) => response)
  //     .catch((error) => console.log(error));

  //   return data;
  // }, []);

  // const getPokemonInfo = useCallback((name: string) => {
  //   const data = usePokeClient
  //     .getPokemonByName(name)
  //     .then((response) => response)
  //     .catch((error) => console.log(error));

  //   return data;
  // }, []);

  return { getPokemons, getPokemonsDetails };
};
