import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from 'pages/404Page/NotFound';
import css from './MovieDetails.module.css';

const API_KEY = '101bb3eef7255fbc3d76a68d5a0e86b7';

export default function MovieDetails() {
  const [film, setFilm] = useState(null);
  const { id } = useParams(null);

  async function getFilm(id) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      setFilm(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getFilm(id);
  }, [id]);

  const location = useLocation();
  const comeBack = location.state?.from ?? '/';

  return (
    <>
      {film !== null ? (
        <div className={css.container}>
          <Link to={comeBack}>
            <button className={css.btn}>Go back</button>
          </Link>
          <main className={css.card}>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500/${film.data.poster_path}`}
              alt={film.data.title}
              width="200px"
            />
            <div>
              <h1> {film.data.original_title}</h1>
              <p>User score: {film.data.vote_average.toFixed(1) * 10 + '%'}</p>
              <h2>Overview</h2>
              <p>{film.data.overview}</p>
              <h2>Genres</h2>
              <p>
                {film.data.genres.map(function (item) {
                  return item.name + ' ';
                })}
              </p>
            </div>
          </main>
          <div>
            <h2>Addictional information</h2>
            <ul className={css.addictional_list}>
              <li className={css.addictional_elem}>
                <Link to="cast" state={{ from: comeBack }}>
                  Cast
                </Link>
              </li>
              <li className={css.addictional_elem}>
                <Link to="reviews" state={{ from: comeBack }}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
