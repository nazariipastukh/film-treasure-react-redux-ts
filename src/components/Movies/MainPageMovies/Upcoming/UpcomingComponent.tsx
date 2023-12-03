import {useEffect} from "react";

import {MovieCard} from "../MovieCard";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {mainPageActions} from "../../../../redux";
import styles from '../MoviesBlockWrapper.module.css'

export const UpcomingComponent = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {upcoming} = useAppSelector(state => state.mainPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(mainPageActions.getUpcoming())
    }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                upcoming.map(movie => <MovieCard movie={movie} key={movie.id}/>)
            }
        </section>
    );
};