import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, Setmovies] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(Setmovies)
      .catch(error =>
        Notify.warning('Movie Detail in progress', { position: 'center' })
      );
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <MovieCard movie={movie}></MovieCard>
    </>
  );
};
export default MovieDetails;
