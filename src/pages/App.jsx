import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFound from './404Page/NotFound';

const TrendingFilms = lazy(() => import('./TrendingFilms/TrendingFilms'));

const Review = lazy(() => import('./Review/Review'));

const Movies = lazy(() => import('./Movies/Movies'));
const Header = lazy(() => import('./Header/Header'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<TrendingFilms />} />
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
