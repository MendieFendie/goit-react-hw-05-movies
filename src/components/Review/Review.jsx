import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '101bb3eef7255fbc3d76a68d5a0e86b7';

export default function Review() {
  const [film, setFilm] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
        );
        setFilm(response);
      } catch (error) {
        console.error(error);
      }
    }
    getFilm();
  }, [id]);
  if (!film.data) {
    return;
  }
  console.log(film.data);
  return (
    <div>
      {film.data.total_results !== 0 ? (
        <ul>
          {film.data.results.map((review, id) => (
            <li key={id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
}
