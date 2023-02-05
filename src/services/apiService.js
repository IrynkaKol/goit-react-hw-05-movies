import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '4019d270e5fd1fc6ed3208efae0ca971';

export const fetchDayTrend = async (endpoints = `trending/movie/day`, options) => {
  const resp = await axios.get(`${endpoints}?api_key=${apiKey}`, options);
  return resp.data;
};

export const fetchMovieByQuery = async (query, options) => {
  const resp = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    options
  );
  return resp.data;
};

export const fetchMovieById = async (id, detailEndpoint = '', options) => {
  const resp = await axios.get(
    `movie/${id}${detailEndpoint}?api_key=${apiKey}&language=en-US`,
    options
  );
  return resp.data;
};
