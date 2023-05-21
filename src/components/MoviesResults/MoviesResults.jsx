import { Link } from 'react-router-dom';
import css from './MoviesResults.module.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function MoviesResult({ movies }) {
    const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <Link
          className={css.movie}
          state={{ from: location }}
          to={`/movies/${movie.id}`}
          key={movie.id}
        >
          <img
            className={css.img}
            src={
              movie.poster_path
                ? imgBaseUrl.concat(movie.poster_path)
                : defaultImg
            }
            alt="poster"
          />
          {movie.title}
        </Link>
      ))}
    </ul>
  );
}

MoviesResult.propTypes = {
  movies:PropTypes.array.isRequired,
};