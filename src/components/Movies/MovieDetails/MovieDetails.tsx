import {FC, useEffect, useState} from "react";

import {IMovie} from "../../../interfaces/movieInterface";
import {moviesService} from "../../../services/moviesService";

interface IProps {
    id: number
}

export const MovieDetails: FC<IProps> = ({id}) => {
    const [movie, setMovie] = useState<IMovie>(null)

    useEffect(() => {
        moviesService.getMovieById(id).then(({data}) => {
            setMovie(data)
            console.log(data)
        })
    })

    return (
        <div>
            MovieDetails
        </div>
    );
};