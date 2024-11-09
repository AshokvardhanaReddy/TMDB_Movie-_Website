import styles from "../component-modules/MovieCard.module.css";

import { useNavigate } from "react-router-dom";

let dummyObj = {
  title: "Title",
  release_date: "2024-11-08",
  original_language: "en",
  media_type: "movie",
};

export const MovieCard = ({ movie = dummyObj }) => {
  const posterPath = movie.backdrop_path;
  const baseUrl = "https://image.tmdb.org/t/p/original"; // Choose size (w200, w500, or original)
  const fullPosterUrl = `${baseUrl}${posterPath}`;
 
  const title = movie.title || movie.name
  const year = movie.release_date?.substring(0, 4) || movie.first_air_date?.substring(0, 4);
  const media_type = ("title" in movie) ? "Movie" : "TV Show";

  const navigate = useNavigate();

  const handleMovieSelect = () => {
    navigate("/play-movie", {state : movie});
  }

  return (
    <>
      <div className={styles.movie_card_container} onClick={handleMovieSelect} >
        <img
        src = {fullPosterUrl}
          alt="movie_image"
          className={styles.movie_card_image}
        />
        {movie && (
          <div className={styles.movie_card_details} >
            <p className={styles.movie_title}>{title}</p>
            <div className={styles.movie_card_year}>
              <p>{year}</p>
              <p>{media_type}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
