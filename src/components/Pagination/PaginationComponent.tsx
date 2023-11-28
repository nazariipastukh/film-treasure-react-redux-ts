import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import React, {FC} from "react";

import {useAppSelector} from "../../hooks/reduxHooks";
import styles from './Pagination.module.css'

interface IProps {
    total_pages: number
}

export const PaginationComponent: FC<IProps> = ({total_pages}) => {
    const [query, setQuery] = useSearchParams();
    const currentPage = +(query.get("page")) || 1;
    const {themeTrigger} = useAppSelector(state => state.theme)

    const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setQuery({page: newPage.toString()});
    };

    if (total_pages > 500) {
        total_pages = 500
    }

    return (
        <section className={`${styles.pagination} ${themeTrigger && styles.dark}`}>
            <Pagination count={total_pages} page={currentPage} onChange={handleChange}/>
        </section>
    );
};