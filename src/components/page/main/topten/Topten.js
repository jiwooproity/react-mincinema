import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMovieData } from "../../../../config/api";

const ToptenContainer = styled.div`
  margin-top: 10px;

  .slick-center .slide-h3 {
    color: #fff;
  }

  .slider {
    width: 600px;
    height: 150px;
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
    opacity: 0.3;
  }

  .slick-center {
    display: block;
    max-width: 10% !important;
    max-height: 20% !important;
    opacity: 1;
  }
`;

const CustomSlider = styled(Slider)``;

const MovieImageWrap = styled.div`
  position: relative;
`;

const MovieImageDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 5;

  background-color: rgba(0, 0, 0, 0.8);
`;

const MovieImage = styled.img`
  width: 100%;

  border-radius: 10px;

  padding: 0px 5px;

  display: block;

  transition: filter 0.5s ease;
`;

const MovieTitle = styled.h1`
  font-size: 30px;
  line-height: 30px;

  padding: 5px 20px;

  color: white;
`;

const Topten = () => {
  const [movie, setMovie] = useState([]);
  const [nowSlick, setNowSlick] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const response = await getMovieData.getMovie();

      setMovie(response);
    };

    getMovies();
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: "400px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
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

  return (
    <ToptenContainer>
      <CustomSlider {...settings}>
        {movie &&
          movie.length > 0 &&
          movie.map((item) => {
            const { large_cover_image, imdb_code } = item;

            return (
              <MovieImageWrap>
                <MovieImageDrop />
                <MovieImage src={large_cover_image} onClick={() => console.log(imdb_code)} />
              </MovieImageWrap>
            );
          })}
      </CustomSlider>
      <MovieTitle>{movie && movie.length > 0 && movie[nowSlick].title_long}</MovieTitle>
    </ToptenContainer>
  );
};

export default Topten;
