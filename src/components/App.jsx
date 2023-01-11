import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import TrendingFilms from './TrendingFilms/TrendingFilms';
export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </>
  );
};
