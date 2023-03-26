import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { usePokemonsInfo } from "../../hooks/getPokemons";

import * as Styled from "./styles";

export const SelectedPokemon: React.FC = () => {
  const { getPokemonDetails, currentPokemon } = usePokemonsInfo();
  const { name } = useParams();

  useEffect(() => {
    getPokemonDetails({ name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.WrapperImage>
          <Styled.Sprite
            src={currentPokemon?.sprites.front_default as string}
            alt="pokemon-display"
          />
        </Styled.WrapperImage>
        <Styled.Label>{currentPokemon?.name}</Styled.Label>

        <Styled.DescriptionWrapper>
          <Styled.Button>types</Styled.Button>
          <Styled.Button>moves</Styled.Button>
          <Styled.Button>evolution</Styled.Button>
          <Styled.Button>weakness</Styled.Button>
          <Styled.Button>resistances</Styled.Button>
        </Styled.DescriptionWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
