import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovieData } from "../../../config/api";

const MainContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

const MainLoading = styled.div`
  width: 100%;
`;

const MainLoadingText = styled.h1`
  font-size: 30px;

  color: black;
`;

const MainMovieWrap = styled.div`
  width: 200px;

  margin: 0px 10px 10px 10px;

  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;

const MainMovieImage = styled.img`
  width: 100%;

  display: block;

  object-fit: cover;
`;

const MainMovieTitle = styled.span`
  font-size: 15px;

  display: block;

  padding: 10px 5px;
`;

// 영화 목록 출력
const RenderItem = ({ movie }, key) => {
  const { large_cover_image, title } = movie;

  return (
    <MainMovieWrap>
      <MainMovieImage key={key} src={large_cover_image} />
      <MainMovieTitle>{title}</MainMovieTitle>
    </MainMovieWrap>
  );
};

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [urlPath, setUrlPath] = useState("https://yts.mx/api/v2/list_movies.json?limit=10");

  useEffect(() => {
    setLoading(true);

    const requestMovie = async () => {
      const response = await getMovieData.getMovie(urlPath);
      setMovie(response);
      setLoading(false);
    };

    requestMovie();
  }, [urlPath]);

  const changeMovie = () => {
    setUrlPath("https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=10");
  };

  return (
    <MainContainer>
      {loading ? (
        <MainLoading>
          <MainLoadingText>Loading ...</MainLoadingText>
        </MainLoading>
      ) : (
        movie.map((item, index) => <RenderItem movie={item} key={index} />)
      )}

      <button onClick={changeMovie}>Change</button>
    </MainContainer>
  );
};

export default Main;
