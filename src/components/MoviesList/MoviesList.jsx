import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink
            to={`/movies/${movie.id}`}
            state={{
              from: location,
            }}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: propTypes.array
}