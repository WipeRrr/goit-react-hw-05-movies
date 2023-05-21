import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function MoviesList({ films }) {
  const location=useLocation()
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.movieList}>
        {films.map(({ id, poster_path, name, title }) => (
          <Link className={css.movieItem} key={id} to={`/movies/${id}`} state={{from:location}}>
            <img
              className={css.movieImg}
              src={poster_path ? imgBaseUrl.concat(poster_path) : defaultImg}
              alt={name}
            />
            <span className={css.text}> {title ?? name}</span>
          </Link>
        ))}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};