import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const location = useLocation();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(ganre => ganre.name).join(', ');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <div className={css.MovieCard}>
        <img
          className={css.img}
          src={poster_path ? imgUrl : defaultImg}
          alt="poster"
          width="350"
        />

        <div className={css.thumb}>
          <Link to={location.state?.from ?? '/'} className={css.backBtn} type="Link">
            ←Back
          </Link>
          <h2 className={css.title}>
            {title} <span>({releaseDate})</span>
          </h2>
          <h3 className={css.text}>
            User score: <span className={css.stats}>{voteScore}</span>
          </h3>
          <h3 className={css.text}>
            Overview: <span className={css.stats}>{overview}</span>
          </h3>
          <h3 className={css.text}>
            Genres: <span className={css.stats}>{genresList}</span>
          </h3>
          <ul className={css.thumbButtons}>
            <li>
              <Link className={css.button} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link className={css.button} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
