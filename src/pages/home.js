import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/API';

const Home = () => {
  const [treandingMovies, SetTreandingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(SetTreandingMovies);
  },[]);
//   console.log(treandingMovies);

  return <MoviesList films={treandingMovies}></MoviesList>;
};

export default Home;
