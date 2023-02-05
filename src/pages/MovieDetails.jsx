import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchMovieById } from '../services/apiService';
import {BASE_IMG_URL} from '../services/constans'

export const MoviesDeteils = () => {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById(id).then(resp => {
      setMovieData(resp); //console.log(resp)
    });
  }, [id]);
  if (!movieData) {
    return (
      <div>
        <h1>Loading data ...</h1>
      </div>
    );
  }
  return (
    <div
style={{
    display: 'flex',
    flexDirection: 'column',
}

}    >
      <h1>Movies Deteils</h1>
      <button>go back</button>
      <img src={BASE_IMG_URL + movieData.poster_path} alt="" width='300' />
      <NavLink to='cast'>cast</NavLink>
      <NavLink to='reviews'>reviews</NavLink>
      <Outlet/>
    </div>
  );
};
