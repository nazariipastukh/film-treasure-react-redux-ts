import {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces/movieInterface";
import {searchService} from "../../../services";
import {Movie} from "../../Movies";
import styles from './SearchResults.module.css'

interface IProps {
    handleSetPages: (pages: number) => void
    inputValue: string
}

export const SearchResults: FC<IProps> = ({handleSetPages, inputValue}) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        searchService.findMovie(inputValue, page).then(({data}) => {
            setMovies(data.results)
            handleSetPages(data.total_pages)
            setShowSkeleton(false)
        })
    }, [handleSetPages, inputValue, page])

    return (
        <section className={styles.resultsWrapper}>
            <section className={styles.list}>
                {
                    movies.length === 0 ? (
                        <article>
                            <p className={styles.notFound}>
                                There are no movies that matched your query.
                            </p>
                        </article>
                    ) : (
                        movies.map((movie) => <Movie movie={movie} key={movie.id} showSkeleton={showSkeleton}/>)
                    )
                }
            </section>
        </section>
    );
};