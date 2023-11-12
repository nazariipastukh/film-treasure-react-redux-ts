import {FC} from "react";
import {NavLink} from "react-router-dom";

import {useTheme} from "../../../hoc";
import styles from './Genre.module.css'

interface IProps {
    genre: {
        id: number,
        name: string
    }
}

export const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre
    const {themeTrigger} = useTheme();

    return (
        <div className={`${styles.genre} ${themeTrigger && styles.darkGenre}`}>
            <NavLink to={`/genres/${id}`}> {name} </NavLink>
        </div>
    );
};