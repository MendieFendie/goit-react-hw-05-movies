import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '101bb3eef7255fbc3d76a68d5a0e86b7';

export default function TrendingFilms() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        const response = await axios.get(
          ` https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );
        setFilms(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getFilms();
  }, []);
  console.log(films);
  return (
    <>
      <h1>Trending Today</h1>
      {films.map(film => (
        <li key={film.id}>
          <p>
            <a
              href={`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}
              })`}
            >
              {film.original_title ? film.original_title : film.name}
            </a>
          </p>
        </li>
      ))}
    </>
  );
}
