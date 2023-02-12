import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieData } from "../../../../config/api";
import { loadingStatus } from "../../../../reducers/setLoading";
import { useCurrentLoading } from "../../../loading/Loading";
import Topten from "./Topten";

const ToptenApi = () => {
  const [movie, setMovie] = useState([]);

  const dispatch = useDispatch();
  const isLoading = useCurrentLoading();

  useEffect(() => {
    const getMovies = async () => {
      const urlPath =
        "https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=10";
      const response = await getMovieData.getMovie(urlPath);

      setMovie(response);

      setTimeout(() => {
        dispatch({ type: loadingStatus.setLoading });
      }, 2000);
    };

    getMovies();
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLoading ? null : <Topten movie={movie} />}
    </React.Fragment>
  );
};

export default ToptenApi;
