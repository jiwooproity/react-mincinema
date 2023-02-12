import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieImageWrap = styled.div`
  position: relative;
`;

const MovieRankWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const MovieRank = styled.h1`
  width: 5px;
  font-size: 350px;
  line-height: 350px;

  opacity: ${({ active }) => (active ? 0.8 : 0)};

  z-index: -1;

  position: absolute;
  top: 50%;
  left: ${({ isTen }) => (isTen ? "-220px" : "-130px")};

  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);

  transform: translateY(-50%);

  color: white;

  transition: opacity 0.5s ease;

  @media screen and (max-width: 768px) {
    font-size: 250px;
    line-height: 250px;
    left: ${({ isTen }) => (isTen ? "-180px" : "-100px")};
  }
`;

const MovieImage = styled.img`
  width: 100%;

  display: block;

  transition: filter 0.5s ease;

  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.8);
`;

const MappingImage = (item, index) => {
  const { large_cover_image, nowSlick } = item;

  return (
    <MovieImageWrap key={index}>
      <MovieRankWrap>
        <MovieRank active={index === nowSlick} isTen={index + 1 === 10}>
          {index + 1}
        </MovieRank>
        <MovieImage src={large_cover_image} />
      </MovieRankWrap>
    </MovieImageWrap>
  );
};

const Carousel = ({ movie, setNowSlick, nowSlick }) => {
  const data = movie.map((item, index) => {
    return { ...movie[index], nowSlick };
  });

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    afterChange: (e) => {
      setNowSlick(e);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{data.map(MappingImage)}</Slider>;
};

export default Carousel;
