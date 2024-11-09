

// import { MoviePlayer } from './pages/MoviePlayer';
// import { WatchingMovieDetails } from './components/WatchingMovieDetais';
import { Footer } from './pages/Footer';
import { Navbar } from './pages/Navbar';
import { Home } from "./pages/Home"

// import { MoviePlayer } from './pages/MoviePlayer';


import { Routes, Route } from "react-router-dom";
import { GenrePage } from './pages/GenrePage';
import { MoviesPage } from "./pages/MoviesPage";
import { TvShowsPage } from "./pages/TvShowsPage";
import { MoviePlayer } from "./pages/MoviePlayer";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<GenrePage />}/>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvshows" element={<TvShowsPage />} />
        <Route path="/genre/play-movie" element={<MoviePlayer />} />
      </Routes>
      {/* <WatchingMovieDetails/> */}
      {/* <Home/> */}
      {/* <MoviePlayer/> */}
      <Footer />

    </>
  );
}

export default App;

