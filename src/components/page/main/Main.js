import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

const MovieImage = styled.img`
  width: 300px;

  object-fit: cover;
`;

const Main = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await axios.get("https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=download_count");

      setData(movie.data.data.movies);
    };

    getMovie();
  }, []);

  return (
    <MainContainer>
      <MainTestSpan>{data && data.length > 0 && data.map((item) => <MovieImage src={item.large_cover_image} />)}</MainTestSpan>
    </MainContainer>
  );
};

export default Main;
