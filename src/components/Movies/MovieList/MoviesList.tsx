import {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {moviesService} from "../../../services";
import {Movie} from "../Movie";
import {IMovie} from "../../../interfaces/movieInterface";
import {useTheme} from "../../../hoc";
import styles from './MoviesList.module.css'

interface IProps {
    handleSetPages: (pages: number) => void
}

export const MoviesList: FC<IProps> = ({handleSetPages}) => {
    const {themeTrigger} = useTheme();
    const [movies, setMovies] = useState<IMovie[]>([])
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        moviesService.getMovies(page).then(({data}) => {
            setMovies(data.results)
            handleSetPages(data.total_pages)
            setShowSkeleton(false)
        })
    }, [handleSetPages, page])

    return (
        <section className={`${styles.wrapper} ${themeTrigger && styles.dark}`}>
            <div className={styles.list}>
                {
                    movies.map((movie) => <Movie movie={movie} key={movie.id} showSkeleton={showSkeleton}/>)
                }
            </div>
        </section>
    );
};