import {useEffect, useState} from "react";

import {genresService} from "../../../services";
import {Genre} from "../Genre";
import {useAppSelector} from "../../../hooks/reduxHooks";
import styles from './GenresList.module.css'

export const GenresList = () => {
    const [genres, setGenres] = useState([])
    const {themeTrigger} = useAppSelector(state => state.theme)

    useEffect(() => {
        genresService.getGenresList().then(({data}) => setGenres(data.genres))
    }, [])

    return (
        <section className={`${styles.listWrapper} ${themeTrigger && styles.darkWrapper}`}>
            <section className={styles.list}>
                {
                    genres && genres.map(genre => <Genre genre={genre} key={genre.id}/>)
                }
            </section>
        </section>
    );
};