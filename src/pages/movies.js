import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/API'
import MoviesResult from 'components/MoviesResults/MoviesResults';
const Movies = () => {
   const [query, setQuery] = useState('');
  const[movies,Setmovies]=useState(null)
  const [searchParams, setSearchParams] = useSearchParams();
  const queryId = searchParams.get('queryId');

  useEffect(() => {
  searchMovies(queryId).then(Setmovies)
},[queryId])
console.log(movies);
  if (!movies) {
  return
}
  return (
    <>
      <form onSubmit={evt => setSearchParams({ queryId: evt.target.value })}>
        <input type="text"></input>
        <button type="submit"></button>
      </form>

      {/* <MoviesResult movie={movies}></MoviesResult> */}
    </>
  );
};

export default Movies;
