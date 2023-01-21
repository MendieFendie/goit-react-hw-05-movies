import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from './TrendingFilms.module.css';

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

  return (
    <>
      <div className={css.container}>
        <h1 className={css.tranding_name}>Trending Today</h1>
        <div className={css.tranding_group}>
          {films.map(film => (
            <li className={css.tranding_element} key={film.id}>
              <Link to={`movies/${film.id}`}>
                {film.original_title ? film.original_title : film.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
