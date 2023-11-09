import {useEffect, useState} from "react";

import {MovieCard} from "../MovieCard";
import {moviesService} from "../../../../services";
import styles from "../MoviesBlockWrapper.module.css";

export const PopularComponent = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        moviesService.getNowPlaying().then(({data}) => {
            setPopularMovies(data.results.slice(0, 7))
            setShowSkeleton(false)
        })
    }, [])

    return (
        <section className={styles.moviesBlockWrapper}>
            {
                popularMovies.map(movie => <MovieCard movie={movie} key={movie.id} showSkeleton={showSkeleton}/>)
            }
        </section>
    );
};