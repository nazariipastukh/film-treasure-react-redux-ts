import {useParams} from "react-router-dom";

import {PaginationComponent, SearchResults} from "../../components";
import {useAppSelector} from "../../hooks";

export const SearchResultsPage = () => {
    const {totalPages} = useAppSelector(state => state.search)

    const {inputValue} = useParams()

    return (
        <section>
            <SearchResults inputValue={inputValue}/>
            <PaginationComponent totalPages={totalPages}/>
        </section>
    );
};