import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  border: 2px solid;
  border-radius: 10px;
  border-color: #000;
  background-color: #e40707;
`;

export const Button = styled.button`
  width: 200px;
  height: 100%;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  font-weight: bold;
  color: #fff;
  background-color: #c20202;

  :hover {
    transform: scale(1.2);
    transition: linear;
    cursor: pointer;
  }

  :nth-child(2n + 1) {
    clear: left;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  background-color: #dad;
`;

export const Label = styled.span`
  font-size: large;
  font-weight: bold;
  text-transform: initial;
`;
