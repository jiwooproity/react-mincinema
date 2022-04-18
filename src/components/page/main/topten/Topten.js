import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMovieData } from "../../../../config/api";

const ToptenContainer = styled.div`
  padding: 0px 10px;
  transform: translateY(-20px);

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
    opacity: 0.3;
    padding: 0px;
    transform: scale(0.8);

    transition: transform 0.5s ease;
  }

  .slick-center {
    display: block;
    max-width: 10% !important;
    max-height: 20% !important;
    transform: scale(1);

    transition: transform 0.5s ease;
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

  display: block;

  transition: filter 0.5s ease;
`;

const MovieTitle = styled.h1`
  font-size: 30px;
  line-height: 30px;

  color: white;
`;

const Topten = () => {
  const [movie, setMovie] = useState([]);
  const [nowSlick, setNowSlick] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const urlPath =
        "https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=20";
      const response = await getMovieData.getMovie(urlPath);

      setMovie(response);
    };

    getMovies();
  }, []);

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

  return (
    <ToptenContainer>
      <CustomSlider {...settings}>
        {movie &&
          movie.length > 0 &&
          movie.map((item, index) => {
            const { large_cover_image, imdb_code } = item;

            return (
              <MovieImageWrap key={index}>
                <MovieImageDrop />
                <MovieImage
                  src={large_cover_image}
                  onClick={() => console.log(imdb_code)}
                />
              </MovieImageWrap>
            );
          })}
      </CustomSlider>
      <MovieTitle>
        {movie && movie.length > 0 && movie[nowSlick].title_long}
      </MovieTitle>
    </ToptenContainer>
  );
};

export default Topten;
