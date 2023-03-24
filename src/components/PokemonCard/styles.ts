import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 136px;
  height: 100%;

  border-radius: 10px;

  background-color: #f10202;

  z-index: 1;
`;

export const Button = styled.button`
  display: flex;
  position: absolute;

  width: 100%;
  height: 100%;
  padding: 0;

  border: none;

  font-weight: bold;

  background-color: transparent;

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
  margin: 0 0 10px;

  border: 2px solid #ff2d2d;
  border-radius: 10px;

  background-color: #ff2d2d;

  z-index: 1;
`;
