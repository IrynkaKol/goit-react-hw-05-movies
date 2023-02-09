import { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchMovieById } from '../services/apiService';
import { BASE_IMG_URL } from '../services/constans';

import { Details, About, Button} from './MovieDetails.styled';

const MoviesDeteils = () => {
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById(id).then(resp => {
      setMovieData(resp);
      //console.log(resp)
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
    <div>
      <Button onClick={handleGoBack}>go back</Button>
      <Details>
        <div>
      <img src={BASE_IMG_URL + movieData.poster_path} alt="" width="300" />
      
      </div>
      <About>
        <h2>
          {movieData.title} (
          {movieData.release_date ? movieData.release_date.substring(0, 4) : ''}
          )
        </h2>

        <p>
          User Score: {''}
          {movieData.vote_average
            ? Math.fround(movieData.vote_average * 10).toFixed(0)
            : ''}
          %
        </p>

        <h3>Overview</h3>
        <p>{movieData.overview}</p>

        <h4>Genres</h4>
        <p>
          {movieData.genres
            ? movieData.genres.map(genre => genre.name).join('')
            : ''}
        </p>
        </About>
      </Details>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
        <NavLink to="cast" state={{ from: location.state.from }}>
          Cast
        </NavLink>
        </li>
        <li>
        <NavLink to="reviews" state={{ from: location.state.from }}>
          Reviews
        </NavLink>
        </li>
        <Outlet />
        </ul>
      </div>
    </div>
  );
};

export default MoviesDeteils;
