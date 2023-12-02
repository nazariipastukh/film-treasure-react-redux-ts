import {useParams} from "react-router-dom";

import {MoviesByGenre, PaginationComponent} from "../../../components";
import {useAppSelector} from "../../../hooks";

export const MoviesByGenrePage = () => {
    const {totalPages} = useAppSelector(state => state.genres)
    const {id} = useParams()

    return (
        <div>
            <MoviesByGenre genreId={id}/>
            <PaginationComponent totalPages={totalPages}/>
        </div>
    );
};