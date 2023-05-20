import css from './MoviesList.module.css'


export default function HomeCollection({ films }) {
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ul className={css.movieList}>
      {films.map(({ id, poster_path, name, title }) => (
        <li className={css.movieItem} key={id}>
          <img
            className={css.movieImg}
            src={imgBaseUrl.concat(poster_path)}
            alt={name}
          />
          <span className={css.text}> {title ?? name}</span>
        </li>
      ))}
    </ul>
  );
}
