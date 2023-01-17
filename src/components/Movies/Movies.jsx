import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import css from '../TrendingFilms/TrendingFilms.module.css';

const API_KEY = '101bb3eef7255fbc3d76a68d5a0e86b7';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('quary');

  async function getFilms(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`
      );
      setFilms(response.data.results);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <form onSubmit={getFilms}>
        <input
          type="text"
          onChange={e => setSearchParams({ quary: e.target.value })}
        />
        <button type="click">Search</button>
      </form>

      {films === [] ? null : (
        <div>
          {
            <div className={css.container}>
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
          }
        </div>
      )}
    </>
  );
}
