export const PaginationComponent = () => {
    return (
        <div>
            PaginationComponent
        </div>
    );
};
// import React, { FC } from "react";
// import { Pagination } from "@mui/material";
// import styles from './Pagination.module.css';
// import { useSearchParams } from "react-router-dom";
//
// interface IProps {
//     page: {
//         total: number;
//     }
// }
//
// export const PaginationComponent: FC<IProps> = ({ page }) => {
//     const { total } = page;
//     const [query, setQuery] = useSearchParams();
//     const currentPage = +(query.get("page")) || 1;
//
//     const handlePageChange = (event: React.MouseEvent<HTMLElement>, newPage: number) => {
//         setQuery({ page: newPage.toString() });
//     };
//
//     // Create a wrapper function to adapt the type to MouseEventHandler<HTMLElement>
//     const handlePageClick: React.MouseEventHandler<HTMLElement> = (event) => {
//         const newPage = Number(event.currentTarget.getAttribute("data-page"));
//         handlePageChange(event, newPage);
//     };
//
//     return (
//         <div className={styles.pagination}>
//             <Pagination
//                 page={currentPage}
//                 count={total}
//                 onClick={handlePageClick}
//             />
//         </div>
//     );
// };