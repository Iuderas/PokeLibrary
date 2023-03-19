import React from "react";
import { IPokemonCard } from "./interfaces";
import * as Styled from "./styles";

export const PokemonCard: React.FC<IPokemonCard> = ({
  onClick,
  img,
  id,
  name,
  type,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {/* <Styled.Button onClick={onClick} /> */}
        <Styled.Sprite src={img} />
        <Styled.Label>{name}</Styled.Label>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
