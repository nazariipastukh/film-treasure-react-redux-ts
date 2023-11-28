import {useEffect, useState} from "react";

import {MovieCard} from "../MovieCard";
import {moviesService} from "../../../../services";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import styles from '../MoviesBlockWrapper.module.css'

export const TopRatedComponent = () => {
    const [topMovies, setTopMovies] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(false);
    const {themeTrigger} = useAppSelector(state => state.theme)

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        moviesService.getTopRated().then(({data}) => {
            setTopMovies(data.results.slice(0, 7))
            setShowSkeleton(false)
        })
    }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                topMovies.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </section>
    );
};