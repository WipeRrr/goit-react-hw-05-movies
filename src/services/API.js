import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const BASE_KEY = 'f75ad82028de22e80377d607e7f657c6';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/week?api_key=${BASE_KEY}`);
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${BASE_KEY}`);
  return data;
};

export const searchMovies = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${BASE_KEY}&query=${query}`
  );
  return data.results;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${BASE_KEY}`
  );
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${BASE_KEY}`
  );
  return data.results;
};