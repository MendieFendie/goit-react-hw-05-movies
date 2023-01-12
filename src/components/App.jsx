import { Routes, Route } from 'react-router-dom';
import FilmCard from './FilmCard/FilmCard';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import TrendingFilms from './TrendingFilms/TrendingFilms';

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<TrendingFilms />} />
            <Route path="movies" element={<Movies />} />
          </Route>

          <Route path="/movies/:id" element={<FilmCard />}></Route>
        </Routes>
      </div>
    </>
  );
};

/* <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} /> */
