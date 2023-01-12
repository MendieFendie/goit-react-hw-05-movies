import { Link, Outlet } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <>
      <nav className={css.header}>
        <Link className={css.home} to="/">
          Home
        </Link>
        <Link className={css.movies} to="/movies">
          Movies
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
