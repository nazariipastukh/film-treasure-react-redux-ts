import {useEffect, useState} from "react";

import {MovieCard} from "../MovieCard";
import {moviesService} from "../../../../services";
import {useTheme} from "../../../../hoc";
import styles from '../MoviesBlockWrapper.module.css'

export const UpcomingComponent = () => {
    const [upcoming, setUpcoming] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(false);
    const {themeTrigger} = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        moviesService.getUpcoming().then(({data}) => {
            setUpcoming(data.results.slice(0, 7))
            setShowSkeleton(false)
        })
    }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                upcoming.map(movie => <MovieCard movie={movie} key={movie.id} showSkeleton={showSkeleton}/>)
            }
        </section>
    );
};