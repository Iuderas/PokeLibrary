import { createContext } from "use-context-selector";

import { IPokemonContext } from "./interfaces";

export const PokemonContext = createContext<IPokemonContext>(
  {} as IPokemonContext
);
