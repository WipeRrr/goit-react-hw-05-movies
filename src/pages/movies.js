import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/API';
import MoviesResult from 'components/MoviesResults/MoviesResults';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);

    searchMovies(movieName).then(data => {
      if (!data.length) {
        setError(true);
        return console.log(
          'There is no movies with this request. Please, try again'
        );
      }
      setError(false);
      setMoviesList(data);
    });
  }, [movieName]);
  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {error && <p>There is no movies with this request. Please, try again</p>}

      <MoviesResult movies={moviesList}></MoviesResult>
    </>
  );
};

export default Movies;
