import { Routes, Route } from 'react-router-dom';
import NotFound from './404Page/NotFound';
import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import Review from './Review/Review';
import TrendingFilms from './TrendingFilms/TrendingFilms';

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<TrendingFilms />} />
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Review />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
