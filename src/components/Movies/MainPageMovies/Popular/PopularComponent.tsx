import {useEffect, useState} from "react";

import {MovieCard} from "../MovieCard";
import {moviesService} from "../../../../services";
import {useTheme} from "../../../../hoc";
import styles from "../MoviesBlockWrapper.module.css";

export const PopularComponent = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(false);
    const {themeTrigger} = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        moviesService.getPopular().then(({data}) => {
            setPopularMovies(data.results.slice(0, 7))
            setShowSkeleton(false)
        })
    }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                popularMovies.map(movie => <MovieCard movie={movie} key={movie.id} showSkeleton={showSkeleton}/>)
            }
        </section>
    );
};