import React, { useState } from "react";
import styled from "styled-components";

import Carousel from "./Carousel";

import ToptenDetail from "./ToptenDetail";

const ToptenContainer = styled.div`
  padding: 60px 30px 60px 30px;

  .slick-center .slide-h3 {
    color: #fff;
  }

  .slider {
    margin: 20px auto;
    text-align: center;
  }

  .slide-h3 {
    margin: 10% 0 10% 0;
    padding: 40% 20%;
    background: #008ed6;
  }

  .slider div {
    margin-right: 5px;
  }

  .slick-slide {
    opacity: 0.2;
    padding: 0px;
    transform: scale(0.8);

    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-prev {
    z-index: 998;
  }

  .slick-center {
    display: block;
    max-width: 10% !important;
    max-height: 20% !important;
    transform: scale(1.2);

    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 1;
  }
`;

const Topten = ({ movie }) => {
  const [nowSlick, setNowSlick] = useState(0);

  return (
    <ToptenContainer>
      <Carousel movie={movie} nowSlick={nowSlick} setNowSlick={setNowSlick} />
      {movie.length > 0 && <ToptenDetail movieData={movie[nowSlick]} />}
    </ToptenContainer>
  );
};

export default Topten;
