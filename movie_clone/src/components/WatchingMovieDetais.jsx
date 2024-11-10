import styles from "../component-modules/WatchingMovieDetails.module.css";
import { IoIosStar, IoIosTimer } from "react-icons/io";

const dummyData = {
  adult: false,
  backdrop_path: "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
  belongs_to_collection: {
    backdrop_path: "/zREjCmCHIHdEF6ufPoDQjhl4Wdm.jpg",
    id: 727761,
    name: "Terrifier Collection",
    poster_path: "/4xIzrMcEvCzJm5qAl92WMHLSIeM.jpg",
  },
  budget: 2000000,
  genres: [
    { id: 27, name: "Horror" },
    { id: 53, name: "Thriller" },
    { id: 9648, name: "Mystery" },
  ],
  homepage: "https://terrifier3.com/",
  id: 1034541,
  imdb_id: "tt27911000",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Terrifier 3",
  overview:
    "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
  popularity: 4082.255,
  poster_path: "/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
  production_companies: [
    {
      id: 238902,
      logo_path: "/jLAg5fOlAw1Jl8Q7WoyKxh1H22y.png",
      name: "Cineverse",
      origin_country: "US",
    },
    {
      id: 15157,
      logo_path: "/yezzLb9RbKNtQUsyYySAqC9TQr7.png",
      name: "Bloody Disgusting",
      origin_country: "US",
    },
    {
      id: 84591,
      logo_path: null,
      name: "Dark Age Cinema",
      origin_country: "US",
    },
    {
      id: 114220,
      logo_path: "/b5n3DtfUySREkq4Xi962zMg69qq.png",
      name: "Fuzz on the Lens Productions",
      origin_country: "US",
    },
    {
      id: 213025,
      logo_path: "/bFz17QGqfF8wiQAH3T4kfzKC8dU.png",
      name: "The Coven",
      origin_country: "US",
    },
    {
      id: 121204,
      logo_path: "/vbtvY4IxgUZk713rkmoTO4MHIac.png",
      name: "BondIt Media Capital",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2024-10-09",
  revenue: 64036702,
  runtime: 125,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
  ],
  status: "Released",
  tagline: "You better not shout, you better not cry.",
  title: "Terrifier 3",
  video: false,
  vote_average: 7.1,
  vote_count: 732,
};

export const WatchingMovieDetails = ({ movieData }) => {
  const movie_data = !movieData.success ? movieData : dummyData;
  const movie = {
    title: movie_data.title,
    image: `https://image.tmdb.org/t/p/original${movie_data.backdrop_path}`,
    year:
      movie_data.release_date?.substring(0, 4) ||
      movie_data.first_air_date?.substring(0, 4),
    movie_type: movie_data.genres[0].name,
    rating: movie_data.vote_average.toFixed(1),
    movie_time: `${Math.floor(movie_data.runtime / 60)} : ${(
      movie_data.runtime % 60
    )
      .toString()
      .padStart(2, "0")} Hr`,
    overview: movie_data.overview,
    country: movie_data.origin_country || "United States of America",
    released_on: movie_data.release_date || movie_data.first_air_date,
    production_company: movie_data.production_companies[0]
      ? movie_data.production_companies[0].name
      : "Un Available",
    cast: "Data Unavailable",
  };
  return (
    <>
      <div className={styles.watching_movie_details}>
        <img src={movie.image} alt="Movie_image" />
        <div>
          <div>
            <h3>{movie.title}</h3>
          </div>
          <div className={styles.movie_rating_details}>
            <p className={styles.movie_type}>{movie.movie_type}</p>
            <p>{movie.year}</p>
            <p>
              {movie.rating}{" "}
              <span style={{ color: "gold" }}>
                <IoIosStar />
              </span>{" "}
            </p>
            <p>
              {" "}
              <span>
                <IoIosTimer />
              </span>{" "}
              {movie.movie_time}
            </p>
          </div>
          <p className={styles.movie_description}>{movie.overview}</p>
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
                <td>{movie.cast}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
