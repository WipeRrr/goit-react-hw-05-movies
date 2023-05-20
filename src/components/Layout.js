import css from './Layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className={css.NavLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.NavLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
