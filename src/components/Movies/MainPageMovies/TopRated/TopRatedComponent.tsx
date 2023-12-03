import {useEffect} from "react";

import {MovieCard} from "../MovieCard";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {mainPageActions} from "../../../../redux";
import styles from '../MoviesBlockWrapper.module.css'

export const TopRatedComponent = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {topRated} = useAppSelector(state => state.mainPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(mainPageActions.getTopRated())
    }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                topRated.map(movie => <MovieCard movie={movie} key={movie.id}/>)
            }
        </section>
    );
};