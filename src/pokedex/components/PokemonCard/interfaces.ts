import { Pokemon } from "pokenode-ts";
import { IPokemon } from "../../hooks/getPokemons/interfaces";

export type TSprite = {
  back_default?: string;
  back_shiny?: string;
  back_female?: string;
  back_shiny_female?: string;
  front_default: string;
  front_shiny?: string;
  front_female?: string;
  front_shiny_female?: string;
};
export interface IPokemonCard {
  // onClick: () => void;
  selectedPokemonDetails: Pokemon;
  selectedPokemon?: IPokemon;
}
