import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../../Movies";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genresActions} from "../../../redux/slices/genresSlice";
import styles from './MoviesByGenre.module.css'

interface IProps {
    genreId: string
}

export const MoviesByGenre: FC<IProps> = ({genreId}) => {
    const {moviesByGenre} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch()
    const [query] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(genresActions.getByGenre({genreId, page}))
    }, [genreId, page])

    return (
        <section className={styles.wrapper}>
            <div className={styles.list}>
                {
                    moviesByGenre.map(movie => <Movie movie={movie} key={movie.id}/>)
                }
            </div>
        </section>
    );
};