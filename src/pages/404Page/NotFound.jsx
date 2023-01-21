import css from '../MovieDetails/MovieDetails.module.css';
import { useLocation, Link } from 'react-router-dom';

export default function NotFound() {
  const location = useLocation();
  const comeBack = location.state ?? '/';
  return (
    <>
      <Link to={comeBack}>
        <button className={css.btn}>Go back</button>
      </Link>
      <p>Sorry, but page not found :(</p>
    </>
  );
}
