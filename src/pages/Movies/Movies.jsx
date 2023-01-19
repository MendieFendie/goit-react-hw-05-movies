import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import css from '../../components/TrendingFilms/TrendingFilms.module.css';
import csss from './Movies.module.css';

const API_KEY = '101bb3eef7255fbc3d76a68d5a0e86b7';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('quary');

  function submitSearch(e) {
    e.preventDefault();
    setSearchParams({ quary: search });
  }

  useEffect(() => {
    async function getFilms() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`
        );
        setFilms(response.data.results);
      } catch (error) {
        console.error(error.message);
      }
    }
    if (name) {
      getFilms();
    }
  }, [name]);

  return (
    <div className={css.container}>
      <form className={csss.form} onSubmit={submitSearch}>
        <input
          className={csss.form_input}
          type="text"
          value={search}
          placeholder={'film name '}
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
        <button className={csss.form_btn} type="click">
          Search
        </button>
      </form>

      {films === [] ? null : (
        <div>
          {
            <div className={css.container}>
              <div className={css.tranding_group}>
                {films.map(film => (
                  <li className={css.tranding_element} key={film.id}>
                    <Link to={`${film.id}`}>
                      {film.original_title ? film.original_title : film.name}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
}
