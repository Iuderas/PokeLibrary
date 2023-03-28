import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { usePokemonsInfo } from "../../hooks/getPokemons";

import { TDescription, TTypes } from "./interfaces";

import * as Styled from "./styles";

export const SelectedPokemon: React.FC = () => {
  const [description, setDescription] = useState<TDescription>();
  const [weakness, setWeakness] = useState<TTypes[]>();
  const [resistances, setResistances] = useState<TTypes[]>();
  const [evolution, setEvolution] = useState<string[]>();

  const {
    getPokemonDetails,
    currentPokemon,
    getDamageRelations,
    damageRelations,
    getEvolutionChain,
    evolutionChain,
  } = usePokemonsInfo();

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPokemonDetails({ name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!currentPokemon || !currentPokemon?.species.name.length) return;
    getEvolutionChain(currentPokemon?.species.url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPokemon]);

  useEffect(() => {
    if (!currentPokemon) return;
    getDamageRelations(currentPokemon?.types[0].type.url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPokemon]);

  useEffect(() => {
    const weaknessMap = damageRelations?.double_damage_from.map(
      (item) => item.name
    );

    const resistancesMap = damageRelations?.half_damage_from.map(
      (item) => item.name
    );

    setWeakness(weaknessMap as TTypes[]);
    setResistances(resistancesMap as TTypes[]);
  }, [damageRelations]);

  useEffect(() => {
    if (!evolutionChain?.evolves_to[0].evolves_to.length) return;
    console.log(evolutionChain);
    const evolutionMap = evolutionChain?.evolves_to.map(
      (item) => item.evolves_to[0].species.name
    );

    setEvolution(evolutionMap);
  }, [evolutionChain]);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.ExitButton
          backgroundColor="#ff2d2d"
          color="#000000"
          buttonSize={40}
          onClick={() => navigate(`/`)}
          rotate={180}
        />
        <Styled.WrapperImage>
          <Styled.Sprite
            src={currentPokemon?.sprites.front_default as string}
            alt="pokemon-display"
          />
        </Styled.WrapperImage>

        <Styled.Label>{currentPokemon?.name}</Styled.Label>

        <Styled.ButtonWrapper>
          <Styled.Button onClick={() => setDescription("types")}>
            types
          </Styled.Button>
          <Styled.Button onClick={() => setDescription("moves")}>
            moves
          </Styled.Button>
          <Styled.Button onClick={() => setDescription("evolution")}>
            evolution
          </Styled.Button>
          <Styled.Button onClick={() => setDescription("weakness")}>
            weakness
          </Styled.Button>
          <Styled.Button onClick={() => setDescription("resistances")}>
            resistances
          </Styled.Button>
        </Styled.ButtonWrapper>

        <Styled.Description>
          {description === "types" &&
            currentPokemon?.types.map((type, index) => (
              <Styled.DescriptionLabel key={index}>
                {type.type.name}
              </Styled.DescriptionLabel>
            ))}
          {description === "moves" &&
            currentPokemon?.moves
              .map((moves, index) => (
                <Styled.DescriptionLabel key={index}>
                  {moves.move.name}
                </Styled.DescriptionLabel>
              ))
              .slice(0, 45)}
          {description === "weakness" &&
            weakness &&
            weakness.map((item, index) => (
              <Styled.DescriptionLabel key={index}>
                {item}
              </Styled.DescriptionLabel>
            ))}
          {description === "resistances" &&
            resistances &&
            resistances.map((item, index) => (
              <Styled.DescriptionLabel key={index}>
                {item}
              </Styled.DescriptionLabel>
            ))}
          {description === "evolution" &&
            evolution &&
            evolution.map((item: string, index: number) => (
              <Styled.DescriptionLabel key={index}>
                {item}
              </Styled.DescriptionLabel>
            ))}
        </Styled.Description>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
