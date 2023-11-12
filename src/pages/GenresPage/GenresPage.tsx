import {Outlet} from "react-router-dom";

import {GenresList} from "../../components";
import {useTheme} from "../../hooks";
import styles from './GenresPage.module.css'

export const GenresPage = () => {
    const {themeTrigger} = useTheme()

    return (
        <div className={`${styles.genresPage} ${themeTrigger && styles.darkGenresPage}`}>
            <GenresList/>
            <Outlet/>
        </div>
    );
};