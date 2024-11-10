
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';
import { useEffect } from "react";

import { Footer } from './pages/Footer';
import { Navbar } from './pages/Navbar';
import { Home } from "./pages/Home";
import { GenrePage } from './pages/GenrePage';
import { MoviesPage } from "./pages/MoviesPage";
import { TvShowsPage } from "./pages/TvShowsPage";
import { MoviePlayer } from "./pages/MoviePlayer";
import { ErrorPage } from './pages/ErrorPage';

function App() {

  const location = useLocation();

  useEffect(() => {
    // Send page view with the current URL
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/genre/:movie-name" element={<MoviePlayer />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movie_name" element={<MoviePlayer />} />
        <Route path="/movies/popular/:movie_name" element={<MoviePlayer />} />
        <Route path="/movies/trending/:movie_name" element={<MoviePlayer />} />
        <Route path="/movies/comingsoon/:movie_name" element={<MoviePlayer />} />
        <Route path="/movies/similar/:play-movie" element={<MoviePlayer />} />
        <Route path="/tvshows" element={<TvShowsPage />} />
        <Route path="/tvshows/:tv_show_name" element={<MoviePlayer />} />
        <Route path="/:genre/:movie_name" element={<MoviePlayer />} />
        <Route path = "*" element =  {<ErrorPage/>} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;

