import styled, { css } from "styled-components";

import { IButtonStyles } from "./interfaces";

export const IconButton = styled.button<IButtonStyles>`
  border-radius: 100%;
  margin: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;

  background-color: ${({ backgroundColor }) => backgroundColor};

  opacity: ${({ disabled }) => (disabled ? "0.2" : "1")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  transform: rotate(${({ rotate }) => rotate}deg);

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `};
`;
