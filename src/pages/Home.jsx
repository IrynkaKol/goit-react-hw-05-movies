import { useEffect, useState } from 'react';
import { fetchDayTrend } from '../services/apiService';
import { MoviesList } from '../components/MoviesList/MoviesList';

 const Home = () => {
  const [movies, setMovies] = useState([]);
  const[isLoading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const {results} = await fetchDayTrend();
        setMovies(results); //results деструктуризація із resp.data
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    })();
  }, []);

  if(isLoading) {
    return (
<div>
  <h1>Loading...</h1>
</div>
    )

  }

  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
};


export default Home