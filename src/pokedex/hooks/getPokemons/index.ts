import axios from "axios";
import * as I from "./interfaces";

export const getPokemons = async (): Promise<I.IPokemonList> => {
  const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon?limit=151&offset=0`;

  const result = await axios.get<I.IPokemonList>(endpoint);

  return result.data;
};

export const getPokemonsDetails = async (name: string) => {
  const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon/${name}`;

  const result = await axios.get<any>(endpoint);

  return result.data;
};
