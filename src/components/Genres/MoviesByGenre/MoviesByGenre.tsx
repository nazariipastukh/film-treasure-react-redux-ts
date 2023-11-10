import {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces/movieInterface";
import {genresService} from "../../../services";
import {Movie} from "../../Movies";
import styles from './MoviesByGenre.module.css'

interface IProps {
    handleSetPages: (pages: number) => void
    genreId: string
}

export const MoviesByGenre: FC<IProps> = ({handleSetPages, genreId}) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        genresService.getByGenre(genreId, page).then(({data}) => {
            setMovies(data.results)
            handleSetPages(data.total_pages)
            setShowSkeleton(false)
        })
    }, [genreId, handleSetPages, page])

    return (
        <section className={styles.wrapper}>
            <div className={styles.list}>
                {
                    movies.map(movie => <Movie movie={movie} key={movie.id} showSkeleton={showSkeleton}/>)
                }
            </div>
        </section>
    );
};