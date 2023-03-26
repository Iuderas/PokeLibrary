import React, { useEffect } from "react";
import { usePokemonsInfo } from "../../hooks/getPokemons";
import * as Styled from "./styles";

export const SelectedPokemon: React.FC = () => {
  const { getPokemonDetails, currentPokemon } = usePokemonsInfo();

  useEffect(() => {
    getPokemonDetails({ url: "https://pokeapi.co/api/v2/pokemon/articuno" });
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

        <Styled.ButtonWrapper>
          <Styled.Button>types</Styled.Button>
          <Styled.Button>moves</Styled.Button>
          <Styled.Button>evolution</Styled.Button>
          <Styled.Button>weakness</Styled.Button>
          <Styled.Button>resistances</Styled.Button>
        </Styled.ButtonWrapper>

        <Styled.DescriptionWrapper>
          <Styled.Description></Styled.Description>
        </Styled.DescriptionWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
