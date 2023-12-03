import {useEffect} from "react";

import {Genre} from "../Genre";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresActions} from "../../../redux";
import styles from './GenresList.module.css'

export const GenresList = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {genres} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genresActions.getGenresList())
    }, [])

    return (
        <section className={`${styles.listWrapper} ${themeTrigger && styles.darkWrapper}`}>
            <section className={styles.list}>
                {
                    genres.map(genre => <Genre genre={genre} key={genre.id}/>)
                }
            </section>
        </section>
    );
};