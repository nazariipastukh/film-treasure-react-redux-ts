import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import React, {FC, useEffect} from "react";

import {useAppSelector} from "../../hooks";
import styles from './Pagination.module.css'

interface IProps {
    totalPages: number
}

export const PaginationComponent: FC<IProps> = ({totalPages}) => {
    const [query, setQuery] = useSearchParams();
    const currentPage = +(query.get("page")) || 1;
    const {themeTrigger} = useAppSelector(state => state.theme)

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [currentPage]);

    const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setQuery({page: newPage.toString()});
    };

    if (totalPages > 500) {
        totalPages = 500
    }

    return (
        <section className={`${styles.pagination} ${themeTrigger && styles.dark}`}>
            <Pagination count={totalPages} page={currentPage} onChange={handleChange}/>
        </section>
    );
};