import {useEffect, useState} from "react";
import {moviesService} from "../../services/moviesService";
import {Movie} from "./Movie";

export const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        moviesService.getMovies().then(({data}) => {
            setMovies(data.results)
            console.log(data.results)
        })
    },[])

    return (
        <div>
            {
                movies.map(movie => <Movie movie={movie} key={movie.id}/>)
            }
        </div>
    );
};