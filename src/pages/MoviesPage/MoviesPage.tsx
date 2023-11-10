import {useState} from "react";

import {MoviesList, PaginationComponent} from "../../components";

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