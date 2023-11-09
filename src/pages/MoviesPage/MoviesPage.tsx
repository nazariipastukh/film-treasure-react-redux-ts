import {useState} from "react";

import {MoviesList} from "../../components/Movies";
import {PaginationComponent} from "../../components/Pagination";

export const MoviesPage = () => {
    const [totalPages, setTotalPages] = useState(null)

    const handleSetPages = (pages: number) => {
        setTotalPages(pages)
    }

    return (
        <section>
            <MoviesList handleSetPages={handleSetPages}/>
            <PaginationComponent total_pages={totalPages}/>
        </section>
    );
};