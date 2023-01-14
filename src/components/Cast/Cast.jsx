import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '101bb3eef7255fbc3d76a68d5a0e86b7';

export default function Cast() {
  const [cast, setCast] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    }
    getCast();
  }, [id]);
  if (!cast.data) {
    return;
  }

  console.log(cast.data.cast);
  return (
    <ul>
      {cast.data.cast.map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : 'https://via.placeholder.com/960x1240?text=Actor'
            }
            alt={actor.name}
            width="200px"
          />
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
