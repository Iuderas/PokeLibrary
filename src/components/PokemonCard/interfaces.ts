export interface IPokemonCard {
  onClick: () => void;
  id?: number;
  name?: string;
  img?: string;
  type?: string;
  url?: string;
  moves?: string;
}
