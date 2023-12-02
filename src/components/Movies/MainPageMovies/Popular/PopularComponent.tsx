import {useEffect} from "react";

import {MovieCard} from "../MovieCard";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import styles from "../MoviesBlockWrapper.module.css";
import {mainPageActions} from "../../../../redux/slices/mainPageMoviesSlice";

export const PopularComponent = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {popular} = useAppSelector(state => state.mainPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(mainPageActions.getPopular())
    }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                popular.map(movie => <MovieCard movie={movie} key={movie.id}/>)
            }
        </section>
    );
};