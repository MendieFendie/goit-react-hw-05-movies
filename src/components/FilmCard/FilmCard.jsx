import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from 'components/404Page/NotFound';

const API_KEY = '101bb3eef7255fbc3d76a68d5a0e86b7';

export default function FilmCard() {
  const [film, setFilm] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        setFilm(response);
      } catch (error) {
        console.error(error.message);
      }
    }
    getFilm();
  }, [id]);
  if (!film.data) {
    return;
  }

  return (
    <main>
      <img
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
        <h2>addictional information</h2>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </main>
  );
}
