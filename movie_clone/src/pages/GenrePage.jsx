
import { useEffect, useState } from "react"
import { MovieTypeContainer } from "../components/MovieTypeContainer"
import { API_Key } from "../server"

import { Outlet } from "react-router-dom"



export const GenrePage = () => {
    const [actionMovies, setActionMovies] = useState([]);
 
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}`)
        .then((res) => res.json())
        .then((json) => setActionMovies(json))
        .catch((err) => console.error(err));
    }, [])

    console.log(actionMovies)

    return (
        <>
           <MovieTypeContainer subTitle = "All Movies Based on Genre" movieData = {actionMovies.results} />
           <Outlet/>
        </>
    )
}