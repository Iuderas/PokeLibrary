import axios from "axios";
import * as I from "./interfaces";
import {
  ChainLink,
  EvolutionChain,
  NamedAPIResource,
  NamedAPIResourceList,
  Pokemon,
  PokemonSpecies,
  PokemonSprites,
  PokemonType,
  Type,
  TypeRelations,
} from "pokenode-ts";
import { useState } from "react";

export const usePokemonsInfo = () => {
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>();
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();
  const [sprite, setSprite] = useState<PokemonSprites>();
  const [id, setId] = useState<number>();
  const [type, setType] = useState<PokemonType[]>();
  const [damageRelations, setDamageRelations] = useState<TypeRelations>();
  const [evolutionChain, setEvolutionChain] = useState<ChainLink>();

  const getPokemonEndpoint = (name: string) => {
    return `${process.env.REACT_APP_POKE_API}/pokemon/${name}`;
  };

  const fetchPokemons = async ({ limit, offset }: I.IGetPokemons) => {
    const endpoint = `${process.env.REACT_APP_POKE_API}/pokemon?limit=${limit}&offset=${offset}`;

    const result = await axios.get<NamedAPIResourceList>(endpoint);

    setPokemonList(result.data.results);
  };

  const getPokemonDetails = async ({ name, url }: I.IGetPokemonsDetails) => {
    const endpoint = url ? url : getPokemonEndpoint(name as string);

    const result = await axios.get<Pokemon>(endpoint);

    setCurrentPokemon(result.data);
  };

  const getPokemonSprites = async (name: string) => {
    const result = (await axios.get<Pokemon>(getPokemonEndpoint(name))).data
      .sprites;

    setSprite(result);
  };

  const getPokemonId = async (name: string) => {
    const result = (await axios.get<Pokemon>(getPokemonEndpoint(name))).data.id;

    setId(result);
  };

  const getPokemonType = async (name: string) => {
    const result = (await axios.get<Pokemon>(getPokemonEndpoint(name))).data
      .types;

    setType(result);
  };

  const getDamageRelations = async (url: string) => {
    const result = (await axios.get<Type>(url)).data.damage_relations;

    setDamageRelations(result);
  };

  const getEvolutionChain = async (url: string) => {
    const evolutionChainUrl = (await axios.get<PokemonSpecies>(url)).data
      .evolution_chain.url;

    const result = (await axios.get<EvolutionChain>(evolutionChainUrl)).data
      .chain;

    setEvolutionChain(result);
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
    damageRelations,
    getDamageRelations,
    evolutionChain,
    getEvolutionChain,
  };
};
