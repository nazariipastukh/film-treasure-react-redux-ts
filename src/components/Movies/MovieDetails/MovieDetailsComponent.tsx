import {FC, useEffect} from "react";

import {MovieDetails} from "./MovieDetails";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../redux/slices/moviesSlice";

interface IProps {
    id: number
}

export const MovieDetailsComponent: FC<IProps> = ({id}) => {
    const {movieById} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(moviesActions.getMovieById(id))
    }, [id])

    return (
        <section>
            {
                movieById && (
                    <MovieDetails movieDetails={movieById}/>
                )
            }
        </section>
    );
};