import {Outlet} from "react-router-dom";

import {GenresList} from "../../components";
import {useAppSelector} from "../../hooks";
import styles from './GenresPage.module.css'

export const GenresPage = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)

    return (
        <div className={`${styles.genresPage} ${themeTrigger && styles.darkGenresPage}`}>
            <GenresList/>
            <Outlet/>
        </div>
    );
};