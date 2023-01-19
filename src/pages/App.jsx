import { Routes, Route } from 'react-router-dom';
import NotFound from './404Page/NotFound';
import Cast from '../components/Cast/Cast';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import Review from '../components/Review/Review';
import TrendingFilms from '../components/TrendingFilms/TrendingFilms';

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<TrendingFilms />} />
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
