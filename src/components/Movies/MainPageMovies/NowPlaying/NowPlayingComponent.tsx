import {useEffect, useState} from "react";

import {MovieCard} from "../MovieCard";
import {moviesService} from "../../../../services";
import {useTheme} from "../../../../hooks";
import styles from '../MoviesBlockWrapper.module.css'

export const NowPlayingComponent = () => {
    const [nowMovies, setNowMovies] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(false);
    const {themeTrigger} = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        moviesService.getNowPlaying().then(({data}) => {
            setNowMovies(data.results.slice(0, 7))
            setShowSkeleton(false)
        })
    }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                nowMovies.map(movie => <MovieCard movie={movie} key={movie.id} showSkeleton={showSkeleton}/>)
            }
        </section>
    );
};