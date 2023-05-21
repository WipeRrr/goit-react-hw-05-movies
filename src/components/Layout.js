import css from './Layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
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
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
