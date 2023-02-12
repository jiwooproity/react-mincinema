import React from "react";
import styled from "styled-components";
import Loading, { useCurrentLoading } from "../../loading/Loading";
import ToptenApi from "./topten/ToptenApi";
import Video from "./video/Video";

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: rgba(0, 0, 0, 1);
`;

const Main = () => {
  const isLoading = useCurrentLoading();

  return (
    <React.Fragment>
      <Loading isLoading={isLoading} />
      <MainContainer>
        {!isLoading && <Video />}
        <ToptenApi />
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;
