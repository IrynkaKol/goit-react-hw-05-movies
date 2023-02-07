import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchCastInfo } from '../../services/apiService';
import { BASE_IMG_URL } from '../../services/constans';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCastInfo(id).then(setCast);
  }, [id]);

  return (
    <div>
      <h1>Cast</h1>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={BASE_IMG_URL + actor.profile_path} alt="" />
          {actor.name}
        </li>
      ))}
    </div>
  );
};
