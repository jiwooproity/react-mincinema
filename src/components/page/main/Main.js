import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
`;

const MainTestSpan = styled.span`
  font-size: 15px;

  color: white;
`;

const Main = () => {
  return (
    <MainContainer>
      <MainTestSpan>good</MainTestSpan>
    </MainContainer>
  );
};

export default Main;
