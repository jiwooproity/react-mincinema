import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;

  z-index: 999;

  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};

  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;

  transition: opacity 5s ease;
`;

const LoadingTitle = styled.h1`
  font-size: 30px;

  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};

  transition: opacity 3s ease;

  color: white;
`;

export const useCurrentLoading = () => {
  const state = useSelector((state) => state);

  const {
    loading: { isLoading },
  } = state;

  return isLoading;
};

const LoadingText = [
  "당신에게 딱 맞는 영화를 가져오는 중 ...",
  "당신을 위한 영화를 준비하는 중 ...",
  "최신 영화 정보를 다운로드 중 ...",
  "영화 추천은 언제나 MIN CINEMA",
  "어떤 영화를 드리는게 좋을까요?",
  "TOP10 안에 드는 영화를 보여드릴게요.",
];

const Loading = ({ isLoading }) => {
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * 5));
  }, []);

  return (
    <LoadingContainer isLoading={isLoading}>
      <LoadingTitle isLoading={isLoading}>
        {LoadingText[randomIndex]}
      </LoadingTitle>
    </LoadingContainer>
  );
};

export default Loading;
