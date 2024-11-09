import { MovieSlider } from "../components/MovieSlider";
import { MovieTypeContainer } from "../components/MovieTypeContainer";
import { API_Key } from "../server"

import { useEffect,useState } from "react"

export const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_Key}`)
      .then((res) => res.json())
      .then((json) => setTrendingMovies(json))
      .catch((err) => console.error(err));

      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}`)
      .then((res) => res.json())
      .then((json) => setUpComingMovies(json))
      .catch((err) => console.error(err));

      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`)
      .then((res) => res.json())
      .then((json) => setPopularMovies(json))
      .catch((err) => console.error(err));

      fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_Key}`)
      .then((res) => res.json())
      .then((json) => setTvShows(json))
      .catch((err) => console.error(err));
   
  }, []);
 
  return (
    <>
      <MovieSlider movieData = {trendingMovies.results} />
      <MovieTypeContainer subTitle="Popular Movies" movieData = {popularMovies.results} />
      <MovieTypeContainer subTitle="Trending" movieData={trendingMovies.results} />
      <MovieTypeContainer subTitle="Coming Soon" movieData = {upComingMovies.results} />
      <MovieTypeContainer subTitle="TV Shows" movieData = {tvShows.results} />
    </>
  );
};
