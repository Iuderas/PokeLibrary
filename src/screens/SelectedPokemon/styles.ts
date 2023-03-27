import styled from "styled-components";

import { ArrowButton } from "../../components/ArrowButton";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 10px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  height: 850px;
  padding: 15px;

  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: fit-content;

  text-transform: capitalize;
  font-weight: bold;
  display: flex;
  justify-content: center;

  padding: 5px 10px;
  margin: 0 0 10px;

  border: none;
  border-radius: 10px;

  background-color: #ff3333;

  font-family: monospace;
  font-size: large;

  :hover {
    cursor: pointer;
    background-color: #dad;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d9d9d9;

  width: 250px;
  height: 300px;
  z-index: 1;

  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 30px;

  padding: 0 20px;

  justify-content: center;
`;

export const Description = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 15px;

  justify-content: center;
  align-items: flex-start;

  width: 100%;

  margin: 30px 0;
`;

export const Sprite = styled.img`
  width: 100%;
`;

export const Label = styled.label`
  width: 100px;
  font-size: large;
  font-weight: bold;
  text-transform: capitalize;
  display: flex;
  justify-content: center;

  padding: 5px;
  margin: 0 0 30px;

  border-radius: 10px;

  background-color: #e6e6e6;
`;

export const DescriptionLabel = styled(Label)`
  margin: 0;
  width: auto;
  height: fit-content;
`;

export const ExitButton = styled(ArrowButton)`
  position: absolute;
  top: 0;
  left: 0;
`;
