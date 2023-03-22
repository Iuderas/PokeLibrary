import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 136px;
  height: 136px;

  /* border-color: ${(props) => props.theme.colors.fire}; */
  border-color: #000000;
  border: 3px;

  background-color: #e40707;

  z-index: 1;
`;

export const Button = styled.button`
  display: none;
  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 10px;

  font-weight: bold;

  z-index: 3;

  :hover {
    cursor: pointer;
  }
`;

export const Sprite = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Label = styled.label`
  font-weight: bold;
  display: flex;

  padding: 5px;
  margin: 2px;

  border: 2px solid #d81f00;
  border-radius: 10px;

  z-index: 1;
`;
