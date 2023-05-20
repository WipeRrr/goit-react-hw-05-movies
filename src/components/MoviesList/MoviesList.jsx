import css from './MoviesList.module.css'
import { Link } from 'react-router-dom';

export default function HomeCollection({ films }) {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ul className={css.movieList}>
      {films.map(({ id, poster_path, name, title }) => (
        <Link className={css.movieItem} key={id} to={`/movies/${id}`}>
          <img
            className={css.movieImg}
            src={imgBaseUrl.concat(poster_path)}
            alt={name}
          />
          <span className={css.text}> {title ?? name}</span>
        </Link>
      ))}
    </ul>
  );
}
