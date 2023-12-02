import {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces/movieInterface";
import {searchService} from "../../../services";
import {Movie} from "../../Movies";
import {useAppSelector} from "../../../hooks";
import styles from './SearchResults.module.css'

interface IProps {
    inputValue: string
}

export const SearchResults: FC<IProps> = ({inputValue}) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')
    const {themeTrigger} = useAppSelector(state => state.theme)

    useEffect(() => {
        setTimeout(() => {
        }, 1000);

        searchService.findMovie(inputValue, page).then(({data}) => {
            setMovies(data.results)
        })
    }, [inputValue, page])

    return (
        <section className={`${styles.resultsWrapper} ${themeTrigger && styles.darkWrapper}`}>
            <section className={styles.list}>
                {
                    movies.length === 0 ? (
                        <article>
                            <p className={styles.notFound}>
                                There are no movies that matched your query.
                            </p>
                        </article>
                    ) : (
                        movies.map((movie) => <Movie movie={movie} key={movie.id}/>)
                    )
                }
            </section>
        </section>
    );
};