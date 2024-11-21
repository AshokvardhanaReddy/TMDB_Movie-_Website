import { useEffect, useState } from "react";
import { MovieTypeContainer } from "../components/MovieTypeContainer";
import { API_Key } from "../server";
import AdComponent from "../components/AdComponent";

export const MoviesPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_Key}`)
      .then((res) => res.json())
      .then((json) => setTrendingMovies(json))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
    <AdComponent/>
      <MovieTypeContainer
        subTitle="List of Movies"
        movieData={trendingMovies.results}
        media_type="movies"
      />
      <AdComponent/>
    </>
  );
};
