import axios from "axios";

const MethodKey = {
  GET: "GET",
  POST: "POST",
};

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const getRequest = (path) => {
  return instance.get(path);
};

const getData = async (path, param, method) => {
  let responseData = [];

  switch (method) {
    case MethodKey.GET:
      responseData = await getRequest(path);
      const { movies } = responseData.data.data;
      return movies;
    case MethodKey.POST:
      return;
    default:
      break;
  }
};

export const getMovieData = {
  getMovie: (path, param) => getData(path, param, "GET"),
};
