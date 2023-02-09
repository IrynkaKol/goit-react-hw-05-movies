import { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchMovieById } from '../services/apiService';
import { BASE_IMG_URL } from '../services/constans';

const MoviesDeteils = () => {
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById(id).then(resp => {
      setMovieData(resp); //console.log(resp)
    });
  }, [id]);

  const handleGoBack = () => {
    //console.log(location)
    navigate(location.state.from);
  };

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
      }}
    >
      <h1>Movies Deteils</h1>
      <button onClick={handleGoBack}>go back</button>
      <img src={BASE_IMG_URL + movieData.poster_path} alt="" width="300" />
      <NavLink to="cast" state={{ from: location.state.from }}>
        cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        reviews
      </NavLink>
      <Outlet />
    </div>
  );
};


export default MoviesDeteils