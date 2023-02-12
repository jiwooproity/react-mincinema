import React from "react";
import docVideo from "../../../../movie/sinbi.mp4";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  overflow: hidden;

  position: relative;
`;

const VideoFrame = styled.video`
  width: 100%;

  display: block;
`;

const VideoBackdrop = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.4);

  box-shadow: inset 0px 0px 15px 18px rgba(0, 0, 0, 1);

  /* &:hover {
    background-color: rgba(0, 0, 0, 0);
  } */

  transition: background-color 0.5s ease;
`;

const VideoTitleWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;

  transform: translateY(-50%);
`;

const VideoTitle = styled.h1`
  font-size: 40px;

  padding-bottom: 5px;

  display: block;

  color: white;

  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

const VideoSummary = styled.span`
  font-size: 15px;

  padding-left: 5px;

  display: block;

  color: white;

  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;

const Video = () => {
  return (
    <VideoContainer>
      <VideoFrame src={docVideo} autoPlay loop />
      <VideoBackdrop />
      <VideoTitleWrap>
        <VideoTitle>《신비한 동물들과 덤블도어의 비밀》</VideoTitle>
        <VideoSummary>
          2022년 공개된 판타지 영화이다. 2018년 영화 《신비한 동물들과
          그린델왈드의 범죄》의 후속 작품이다.
        </VideoSummary>
      </VideoTitleWrap>
    </VideoContainer>
  );
};

export default Video;
