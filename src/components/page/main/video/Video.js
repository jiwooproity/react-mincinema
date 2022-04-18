import React from "react";
import docVideo from "../../../../movie/sinbi.mp4";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;

  border-radius: 15px;

  overflow: hidden;

  position: relative;
`;

const VideoFrame = styled.video`
  width: 100%;

  display: block;
`;

const VideoTitleWrap = styled.div`
  width: 100%;
  padding: 0px 20px;

  display: block;

  position: absolute;
  top: 50%;
  left: 0px;

  transform: translateY(-50%);
`;

// const VideoTitle = styled.h1`
//   font-size: 30px;

//   display: block;

//   color: white;

//   @media screen and (max-width: 768px) {
//     font-size: 15px;
//   }
// `;

const Video = () => {
  return (
    <VideoContainer>
      <VideoTitleWrap>
        {/* <VideoTitle>《신비한 동물들과 덤블도어의 비밀》</VideoTitle> */}
      </VideoTitleWrap>
      <VideoFrame src={docVideo} autoPlay />
    </VideoContainer>
  );
};

export default Video;
