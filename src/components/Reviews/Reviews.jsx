import { getMovieReviews } from 'services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
export const Reviews = () => {
  const [reviews, Setreview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(Setreview);
  }, [movieId]);
  // console.log(reviews);
  if (!reviews) {
    return;
  }

  return (
    <ul className={css.thumb}>
      {reviews.length === 0 && (
        <p className={css.author}>We don`t have any reviews for this movie</p>
      )}
      {reviews.map(({ id, author, content }) => (
        <li className={css.item} key={id}>
          <h3 className={css.author}>{author}</h3>
          <p className={css.text}>{content}</p>
        </li>
      ))}
    </ul>
  );
};
