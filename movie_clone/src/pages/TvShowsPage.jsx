import { useEffect, useState } from "react";
import { MovieTypeContainer } from "../components/MovieTypeContainer";
import { API_Key } from "../server";

export const TvShowsPage = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_Key}`)
      .then((res) => res.json())
      .then((json) => setTvShows(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <MovieTypeContainer
        subTitle="List of TV Shows"
        movieData={tvShows.results}
        media_type="tvshows"
      />
    </>
  );
};
