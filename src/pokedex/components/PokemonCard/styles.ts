import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 136px;
  height: 136px;
  :hover {
    background-color: rgba(0, 255, 0, 0.2);
    cursor: pointer;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
`;

export const Sprite = styled.img`
  width: 100%;
  height: 100%;
`;

//Pokemon ID/Number
export const Label = styled.label`
  font-weight: bold;
  display: flex;
`;
