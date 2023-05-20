import Home from "pages/home";
import Movies from "pages/movies";
import { Routes, NavLink, Route } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<div>Movies element</div>} />
      </Routes>
    </div>
  );
};
