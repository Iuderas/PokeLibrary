import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  height: 850px;

  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  width: 90px;
  text-transform: capitalize;
  font-weight: bold;
  display: flex;
  justify-content: center;

  padding: 5px;
  margin: 0 0 10px;

  border: none;
  border-radius: 10px;

  background-color: #ff3333;
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

export const DescriptionWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 30px;

  padding: 0 20px;

  justify-content: center;
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

  background-color: #ff3333;
`;
