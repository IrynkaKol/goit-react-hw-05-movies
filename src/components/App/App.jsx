import { Routes, Route } from "react-router-dom";
import {Navigation} from '../Navigation/Navigation';
//import { Home } from "pages/Home";
//import { Movies } from "pages/Movies";
//import { MoviesDeteils } from "pages/MovieDetails";
//import { Cast } from "components/Cast/Cast";
//import { Reviews } from "components/Reviews/Reviews";
//import {NotFound} from 'pages/NotFound'
import { lazy } from "react";

const Home = lazy(()  => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesDeteils = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'))




export const App = () => {
  return (
    <div>
      <Navigation/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='movies' element={<Movies/>} />
        <Route path="movies/:id" element={<MoviesDeteils/>} >
          <Route path="cast" element={<Cast/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          </Route>
          {/*<Route path="*" element={<NotFound />} />*/}
      
      </Routes>
    </div>
  );
};
