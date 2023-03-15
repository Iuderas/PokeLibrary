import styled from "styled-components";

export const Container = styled.div`
  /* overflow-y: scroll; */
`;

export const Button = styled.button`
  /* width: 100%; */
  height: 100%;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;

  :hover {
    background-color: rgba(0, 255, 0, 0.2);
    cursor: pointer;
  }
`;

export const Label = styled.span`
  font-size: large;
  font-weight: bold;
  text-transform: initial;
`;
