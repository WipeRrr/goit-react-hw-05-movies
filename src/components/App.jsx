// import MovieDetails from 'pages/MoviesDetails';
// import Home from 'pages/home';
// import Movies from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));
const Movies = lazy(() => import('../pages/movies'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
