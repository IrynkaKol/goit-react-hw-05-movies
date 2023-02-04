import { Routes, Route } from "react-router-dom";
import {Navigation} from '../Navigation/Navigation';
import { Home } from "pages/HomePage";
import { Movies } from "pages/Movies";
import { MoviesDeteils } from "pages/MovieDetails";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Navigation/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path="movies/:id" element={<MoviesDeteils/>} >
          <Route path="cast" element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          </Route>
      
      </Routes>
    </div>
  );
};
