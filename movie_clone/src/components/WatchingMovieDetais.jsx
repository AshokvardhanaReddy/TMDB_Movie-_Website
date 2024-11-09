import styles from "../component-modules/WatchingMovieDetails.module.css";
import { IoIosStar, IoIosTimer  } from "react-icons/io";

export const WatchingMovieDetails = ({movieData}) => {
  const movie = {title : movieData.title,
                 image : `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
                 year : movieData.release_date?.substring(0, 4) || movieData.first_air_date?.substring(0, 4),
                 movie_type : movieData.genres[0].name,
                 rating : movieData.vote_average.toFixed(1),
                 movie_time : `${Math.floor(movieData.runtime / 60)} : ${(movieData.runtime % 60).toString().padStart(2, '0')} Hr`,
                 overview : movieData.overview,
                 country : movieData.origin_country || "United States of America" ,
                 released_on : movieData.release_date || movieData.first_air_date,
                 production_company : movieData.production_companies[0].name,
                 cast : "Data Unavailable"
  }
  return (
    <>
      <div className={styles.watching_movie_details}>
        <img src={movie.image} alt="Movie_image" />
        <div>
          <div>
            <h3>{movie.title}</h3>
          </div>
          <div className = {styles.movie_rating_details} >
            <p className ={styles.movie_type} >{movie.movie_type}</p>
            <p>{movie.year}</p>
            <p>{movie.rating} <span style={{color : "gold"}} ><IoIosStar/></span> </p>
            <p> <span><IoIosTimer/></span> {movie.movie_time}</p>
          </div>
          <p className = {styles.movie_description} >
           {movie.overview}
          </p>
          <table>
          <tbody>
            <tr>
              <td>Country : </td>
              <td>{movie.country}</td>
            </tr>
            <tr>
              <td>Genre : </td>
              <td>Action, Drama, Sci-Fi</td>
            </tr>
            <tr>
              <td>Relesed On : </td>
              <td>{movie.released_on}</td>
            </tr>
            <tr>
              <td>Production : </td>
              <td>{movie.production_company}</td>
            </tr>
            <tr>
              <td>Cast : </td>
              <td>
                {movie.cast}
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
