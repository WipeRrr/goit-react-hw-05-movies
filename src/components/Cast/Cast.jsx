import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';
import css from './Cast.module.css';
export const Cast = () => {
  const [cast, Setcast] = useState(null);
  const { movieId } = useParams();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    getMovieCredits(movieId).then(Setcast);
  }, [movieId]);
  // console.log(cast);

  if (!cast) {
    return null;
  }
  return (
    <ul className={css.cast}>
      {cast.map(actor => (
        <li className={css.castItem} key={actor.id}>
          <img
            className={css.img}
            src={
              actor.profile_path
                ? imgBaseUrl.concat(actor.profile_path)
                : defaultImg
            }
            alt="actor-poster"
          />
          <div className={css.textThumb}>
            <span className={css.textName}>{actor.name}</span>
            <span className={css.textCharacter}>Character: {actor.character}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
