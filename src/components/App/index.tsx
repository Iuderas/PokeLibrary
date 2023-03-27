import React from "react";

import img from "../../utils/Images/Header.png";

import * as Styled from "./styles";

import { Outlet } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Styled.ContentWrapper>
      <Styled.HeaderImage src={img} />
      <Outlet />
    </Styled.ContentWrapper>
  );
};
