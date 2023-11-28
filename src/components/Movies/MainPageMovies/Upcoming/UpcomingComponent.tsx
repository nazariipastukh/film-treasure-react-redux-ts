import {useEffect, useState} from "react";

import {MovieCard} from "../MovieCard";
import {moviesService} from "../../../../services";
import {useAppSelector} from "../../../../hooks";
import styles from '../MoviesBlockWrapper.module.css'

export const UpcomingComponent = () => {
    const [upcoming, setUpcoming] = useState([])
    const [showSkeleton, setShowSkeleton] = useState(false);
    const {themeTrigger} = useAppSelector(state => state.theme)

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
                upcoming.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </section>
    );
};