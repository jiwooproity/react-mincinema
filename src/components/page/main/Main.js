import React from "react";
import styled from "styled-components";
import Topten from "./topten/Topten";
import Video from "./video/Video";

const MainContainer = styled.div`
  width: 100%;

  padding: 30px;

  background-color: rgba(0, 0, 0, 1);
`;

const Main = () => {
  return (
    <MainContainer>
      <Video />
      <Topten />
    </MainContainer>
  );
};

export default Main;
