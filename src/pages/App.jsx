import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFound from './404Page/NotFound';
// import Cast from '../components/Cast/Cast';
// import MovieDetails from '../components/MovieDetails/MovieDetails';
// import Header from './Header/Header';
// import Movies from './Movies/Movies';
// import Review from '../components/Review/Review';
//  import TrendingFilms from '../components/TrendingFilms/TrendingFilms';

const TrendingFilms = lazy(() =>
  import('../components/TrendingFilms/TrendingFilms')
);

const Review = lazy(() => import('../components/Review/Review'));

const Movies = lazy(() => import('./Movies/Movies'));
const Header = lazy(() => import('./Header/Header'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../components/Cast/Cast'));

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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
