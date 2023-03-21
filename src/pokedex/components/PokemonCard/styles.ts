import styled from "styled-components";

export const Wrapper = styled.div`
  width: 136px;
  height: 136px;
  background-color: #e40707;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Sprite = styled.img`
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  font-weight: bold;
  display: flex;

  padding: 5px;
  margin: 2px;

  border: 2px solid #d81f00;
  border-radius: 10px;
`;
