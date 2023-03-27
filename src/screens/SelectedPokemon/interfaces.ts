export type TDescription =
  | "types"
  | "moves"
  | "evolution"
  | "weakness"
  | "resistances";

export type TTypes =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy"
  | "eletric";

export interface ILabelStyles {
  type: TTypes;
}
