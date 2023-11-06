import {useEffect, useState} from "react";

import {moviesService} from "../../services/moviesService";
import {Movie} from "./Movie";
import {IMovie} from "../../interfaces/movieInterface";
import styles from './MoviesList.module.css'

export const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [showSkeleton, setShowSkeleton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        moviesService.getMovies().then(({data}) => {
            setMovies(data.results)
            setShowSkeleton(false)
        })
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {
                    movies.map((movie) => <Movie movie={movie} key={movie.id} showSkeleton={showSkeleton}/>)
                }
            </div>
        </div>
    );
};