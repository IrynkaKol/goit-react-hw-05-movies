import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchCastInfo } from '../../services/apiService';
import { BASE_IMG_URL } from '../../services/constans';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCastInfo(id).then(setCast);
  }, [id]);

  return (
    <div>
      
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={BASE_IMG_URL + actor.profile_path} alt="" width='150'/>
          <p>{actor.name}</p>
          <p>character: {actor.character}</p>
        </li>
        
      ))}
    </div>
  );
};


export default Cast