import {MoviesList, PaginationComponent} from "../../components";
import {useAppSelector} from "../../hooks";

export const MoviesPage = () => {
    const {totalPages} = useAppSelector(state => state.movies)

    return (
        <section>
            <MoviesList/>
            <PaginationComponent totalPages={totalPages}/>
        </section>
    );
};