import styles from "../component-modules/MovieTypeContainer.module.css";

import { MovieTitle } from "./MovieTitle";
import { MovieCard } from "./MovieCard";

export const MovieTypeContainer = ({subTitle, movieData}) => {
  console.log(movieData)
  return (
    <>
      <div className = {styles.movie_type_container}>
        <MovieTitle subTitle={subTitle}  />
        <div className = {styles.movies_container} >
          {movieData === undefined ? <p>Unable to Fetch Data From Servers...</p> : movieData.map((movie) => <MovieCard key = {movie.id} movie = {movie} />) }
        
        </div>
      </div>
    </>
  );
};

