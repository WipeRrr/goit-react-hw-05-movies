import MovieDetails from 'pages/MoviesDetails';
import Home from 'pages/home';
import Movies from 'pages/movies';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
