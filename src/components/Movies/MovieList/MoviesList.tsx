import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../Movie";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../redux";
import styles from './MoviesList.module.css'

export const MoviesList = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(moviesActions.getMovies(page))
    }, [page])

    return (
        <section className={`${styles.wrapper} ${themeTrigger && styles.dark}`}>
            <div className={styles.list}>
                {
                    movies.map((movie) => <Movie movie={movie} key={movie.id}/>)
                }
            </div>
        </section>
    );
};