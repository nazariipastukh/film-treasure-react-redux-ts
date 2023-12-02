import {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces/movieInterface";
import {genresService} from "../../../services";
import {Movie} from "../../Movies";
import styles from './MoviesByGenre.module.css'

interface IProps {
    genreId: string
}

export const MoviesByGenre: FC<IProps> = ({genreId}) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        setTimeout(() => {

        }, 1000);

        genresService.getByGenre(genreId, page).then(({data}) => {
            setMovies(data.results)

        })
    }, [genreId, page])

    return (
        <section className={styles.wrapper}>
            <div className={styles.list}>
                {
                    movies.map(movie => <Movie movie={movie} key={movie.id}/>)
                }
            </div>
        </section>
    );
};