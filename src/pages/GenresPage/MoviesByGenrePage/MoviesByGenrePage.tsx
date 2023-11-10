import {useState} from "react";
import {useParams} from "react-router-dom";

import {MoviesByGenre, PaginationComponent} from "../../../components";

export const MoviesByGenrePage = () => {
    const [totalPages, setTotalPages] = useState(null)

    const {id} = useParams()

    const handleSetPages = (pages: number) => {
        setTotalPages(pages)
    }

    return (
        <div>
            <MoviesByGenre genreId={id} handleSetPages={handleSetPages}/>
            <PaginationComponent total_pages={totalPages}/>
        </div>
    );
};