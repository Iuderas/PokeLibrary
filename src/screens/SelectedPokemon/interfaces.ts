export interface ISelectedPokemon {
  onClick?: () => void;
  name?: string;
  id?: number;
  image?: string;
  type?: string;
  url?: string;
  moves?: string;
  evolutions?: string;
  weakness?: string;
  resistances?: string;
}
