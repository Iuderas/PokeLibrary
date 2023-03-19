import { NamedAPIResource, Pokemon } from "pokenode-ts";

export interface IPokemonList {
  data: NamedAPIResource[];
  onClick: () => void;
}
