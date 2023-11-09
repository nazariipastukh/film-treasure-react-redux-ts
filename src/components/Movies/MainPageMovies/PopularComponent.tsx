import {useEffect, useState} from "react";

import {popularService} from "../../../services/popularService";
import {PopularMovie} from "./PopularMovie";
import styles from '../MovieDetails/Details.module.css'

export const PopularComponent = () => {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        popularService.getPopular().then(({data}) => {
            setPopularMovies(data.results.slice(0, 7))
            console.log(data.results)
        })
    }, [])

    return (
        <div className={styles.popular}>
            {
                popularMovies.map(movie => <PopularMovie movie={movie} key={movie.id}/>)
            }
        </div>
    );
};