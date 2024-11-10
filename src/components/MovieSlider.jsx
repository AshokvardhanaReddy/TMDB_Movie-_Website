import { useNavigate } from "react-router-dom";
import styles from "../component-modules/MovieSlider.module.css";

export const MovieSlider = ({ movieData }) => {
  const movie = movieData ? movieData[0] : [];
  const posterPath = movie.backdrop_path;
  const baseUrl = "https://image.tmdb.org/t/p/original"; // size can be (w200, w500, or original)
  const fullPosterUrl = `${baseUrl}${posterPath}`;

  const title = movie.title || movie.name;
  const year =
    movie.release_date?.substring(0, 4) ||
    movie.first_air_date?.substring(0, 4);
  const media_type = "title" in movie ? "Movie" : "TV Show";

  const navigate = useNavigate();
  const handleSlidingMovie = () => {
    navigate(`/movie/:${title}`, { state: movie });
  };

  return (
    <>
      <div
        className={styles.movie_slider_container}
        onClick={handleSlidingMovie}
      >
        <img src={fullPosterUrl} alt="Home_Movie_image" />
        <div className={styles.sliding_movie_details}>
          <h2>{title}</h2>
          <span>
            <p>{year}</p>
            <p>{media_type}</p>{" "}
          </span>
          <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
};
