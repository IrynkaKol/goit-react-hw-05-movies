import { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchMovieById } from '../services/apiService';
import { BASE_IMG_URL } from '../services/constans';

import { Container } from './MovieDetails.styled';

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
      <button onClick={handleGoBack}>go back</button>
      <img src={BASE_IMG_URL + movieData.poster_path} alt="" width="150" />
      <div>
        <h1>
          {movieData.title} (
          {movieData.release_date ? movieData.release_date.substring(0, 4) : ''}
          )
        </h1>

        <p>
          User Score: {''}
          {movieData.vote_average
            ? Math.fround(movieData.vote_average * 10).toFixed(0)
            : ''}
          %
        </p>

        <h2>Overview</h2>
        <p>{movieData.overview}</p>

        <h3>Genres</h3>
        <p>
          {movieData.genres
            ? movieData.genres.map(genre => genre.name).join('')
            : ''}
        </p>
      </div>
      <Container>
        <h2>Additional information</h2>
        <NavLink to="cast" state={{ from: location.state.from }}>
          cast
        </NavLink>
        <NavLink to="reviews" state={{ from: location.state.from }}>
          reviews
        </NavLink>
        <Outlet />
      </Container>
    </div>
  );
};

export default MoviesDeteils;
