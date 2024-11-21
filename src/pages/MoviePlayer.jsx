import styles from "../page-modules/MoviePlayer.module.css";
import dummy_video from "../assets/dummy_video.mp4";
import { API_Key } from "../server";

import { WatchingMovieDetails } from "../components/WatchingMovieDetais";
import { MovieTypeContainer } from "../components/MovieTypeContainer";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AdComponent from "../components/AdComponent";

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
export const MoviePlayer = () => {
  const [movieDeails, setMovieDetails] = useState(dummyData);
  const [similarMovies, setSimilarMovies] = useState([dummyData]);
  const [video, setVideo] = useState(dummy_video);

  const location = useLocation();
  const movie_id = location.state.id;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_Key}`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_Key}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const youtubeTrailer = data.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer",
        );
        if (youtubeTrailer) {
          setVideo(youtubeTrailer.key);
        }
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_Key}`,
    )
      .then((res) => res.json())
      .then((data) => setSimilarMovies(data));
  }, [movie_id]);

  const video_link = `https://www.youtube.com/embed/${video}`;

  return (
    <>
      <div className={styles.movie_player}>
        <iframe
          src={video_link}
          className={styles.video_player}
          title={movie_id}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    <AdComponent/>
        <WatchingMovieDetails movieData={movieDeails} />
    <AdComponent/>
        <MovieTypeContainer
          subTitle="You May Also Like"
          movieData={similarMovies.results}
          media_type="movies/similar"
        />
    <AdComponent/>
      </div>
    </>
  );
};
