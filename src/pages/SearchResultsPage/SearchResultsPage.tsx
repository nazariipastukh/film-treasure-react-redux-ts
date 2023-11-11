import {useState} from "react";
import {useParams} from "react-router-dom";

import {PaginationComponent, SearchResults} from "../../components";

export const SearchResultsPage = () => {
    const [totalPages, setTotalPages] = useState(null)
    const {inputValue} = useParams()

    const handleSetPages = (pages: number) => {
        setTotalPages(pages)
    }

    return (
        <section>
            <SearchResults handleSetPages={handleSetPages} inputValue={inputValue}/>
            <PaginationComponent total_pages={totalPages}/>
        </section>
    );
};