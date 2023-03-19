import { useContextSelector } from "use-context-selector";

import { PokemonContext } from "./context";

export const usePokemonContext = () => {
  const currentPokemon = useContextSelector(
    PokemonContext,
    (state) => state.currentPokemon
  );

  return { currentPokemon };
};
