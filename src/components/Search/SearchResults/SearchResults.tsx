import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../../Movies";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import styles from './SearchResults.module.css'
import {searchActions} from "../../../redux/slices/searchSlice";

interface IProps {
    inputValue: string
}

export const SearchResults: FC<IProps> = ({inputValue}) => {
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {moviesBySearch} = useAppSelector(state => state.search)
    const dispatch = useAppDispatch()
    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(searchActions.getMoviesBySearch({inputValue, page}))
    }, [inputValue, page])

    return (
        <section className={`${styles.resultsWrapper} ${themeTrigger && styles.darkWrapper}`}>
            <section className={styles.list}>
                {
                    moviesBySearch.length === 0 ? (
                        <article>
                            <p className={styles.notFound}>
                                There are no movies that matched your query.
                            </p>
                        </article>
                    ) : (
                        moviesBySearch.map((movie) => <Movie movie={movie} key={movie.id}/>)
                    )
                }
            </section>
        </section>
    );
};