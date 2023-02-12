import React from "react";
import styled from "styled-components";

const MovieDetailContainer = styled.div`
  width: 100%;

  display: flex;

  margin-top: 80px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const MovieDetailBackground = styled.img`
  width: 100%;
  height: 100%;

  z-index: 1;

  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0.3;
`;

const MovieDetailPoster = styled.img`
  width: 300px;

  z-index: 3;

  display: block;
  transform: scale(1.05);

  box-shadow: 3px 0px 5px rgba(0, 0, 0, 1);

  @media screen and (max-width: 768px) {
    width: 100%;
    transform: scale(1);
  }
`;

const MovieDetailDesWrap = styled.div`
  padding: 10px 25px;

  overflow: hidden;

  position: relative;

  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const MovieDetailTitle = styled.h1`
  font-size: 30px;

  margin-bottom: 5px;

  color: white;
`;

const MovieDetailSummary = styled.span`
  font-size: 15px;
  color: white;
`;

const MovieRatingWrap = styled.div`
  width: 100%;

  margin-top: 10px;

  display: flex;
  align-items: center;
`;

const MovieRatingTitle = styled.h3`
  font-size: 15px;

  color: white;
`;

const MovieRatingBar = styled.div`
  width: 100px;
  height: 12px;

  overflow: hidden;

  border-radius: 2px;

  margin-top: 5px;
  margin-left: 5px;

  background-color: rgba(255, 255, 255, 0.2);

  position: relative;
`;

const MovieRatingStatus = styled.div`
  width: ${({ status }) => status * 10}%;
  height: 100%;

  background-color: red;

  display: block;

  position: absolute;
  top: 0;
  left: 0;

  transition: width 0.5s ease;
`;

const MovieRatingMaxScore = styled.span`
  font-size: 8px;

  padding-bottom: 2px;

  position: absolute;
  top: 50%;
  left: 3px;

  transform: translateY(-50%);

  display: block;

  color: white;

  z-index: 1;
`;

const MovieTagWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 10px;
`;

const MovieTag = styled.span`
  font-size: 12px;

  padding-right: 5px;

  color: white;
`;

const MovieRuntime = styled.span`
  font-size: 15px;

  display: block;

  margin-top: 10px;

  color: white;
`;

const GenresMapping = (tag, index) => {
  return <MovieTag key={index}>#{tag}</MovieTag>;
};

const ToptenDetail = ({ movieData }) => {
  const {
    large_cover_image,
    background_image,
    title_long,
    description_full,
    rating,
    runtime,
    genres,
  } = movieData;

  return (
    <MovieDetailContainer>
      <MovieDetailPoster src={large_cover_image} />
      <MovieDetailDesWrap>
        <MovieDetailBackground src={background_image} />
        <MovieDetailTitle>{title_long}</MovieDetailTitle>
        <MovieDetailSummary>{description_full}</MovieDetailSummary>
        <MovieRatingWrap>
          <MovieRatingTitle>Rating </MovieRatingTitle>
          <MovieRatingBar>
            <MovieRatingStatus status={rating} />
            <MovieRatingMaxScore>{rating} / 10</MovieRatingMaxScore>
          </MovieRatingBar>
        </MovieRatingWrap>
        <MovieRuntime>{runtime}분</MovieRuntime>
        <MovieTagWrap>{genres.map(GenresMapping)}</MovieTagWrap>
      </MovieDetailDesWrap>
    </MovieDetailContainer>
  );
};

export default ToptenDetail;
