type TTypes =
  | "Bug"
  | "Dragon"
  | "Electric"
  | "Fighting"
  | "Fire"
  | "Flying"
  | "Ghost"
  | "Grass"
  | "Ground"
  | "Ice"
  | "Normal"
  | "Poison"
  | "Psychic"
  | "Rock"
  | "Water";

interface IMove {
  name: string;
  url: string;
}

interface IPokemon {
  name: string;
  types: TTypes;
  moves: IMove[];
}

export {};
