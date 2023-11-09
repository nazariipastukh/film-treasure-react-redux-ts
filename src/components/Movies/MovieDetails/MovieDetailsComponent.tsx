import {FC, useEffect, useState} from "react";

import {moviesService} from "../../../services";
import {MovieDetails} from "./MovieDetails";
import {IMovieDetails} from "../../../interfaces/movieDetailsInterface";

interface IProps {
    id: number
}

export const MovieDetailsComponent: FC<IProps> = ({id}) => {
    const [movieDetails, setMovieDetails] = useState<IMovieDetails>(null)
    const [showSkeleton, setShowSkeleton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(true);
        }, 1000);

        moviesService.getMovieById(id).then(({data}) => {
            setMovieDetails(data)
            setShowSkeleton(false)
        })
    }, [id])

    return (
        <section>
            {
                movieDetails && (
                    <MovieDetails movieDetails={movieDetails} showSkeleton={showSkeleton}/>
                )
            }
        </section>
    );
};