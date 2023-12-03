import {useEffect} from "react";

import {MovieCard} from "../MovieCard";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {mainPageActions} from "../../../../redux";
import styles from '../MoviesBlockWrapper.module.css'

export const NowPlayingComponent = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {nowPlaying} = useAppSelector(state => state.mainPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(mainPageActions.getNowPlaying())
    }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                nowPlaying.map(movie => <MovieCard movie={movie} key={movie.id}/>)
            }
        </section>
    );
};