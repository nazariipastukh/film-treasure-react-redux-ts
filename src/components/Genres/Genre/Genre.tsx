import {FC} from "react";
import {NavLink} from "react-router-dom";

import {useAppSelector} from "../../../hooks";
import {IGenre} from "../../../interfaces/genreInterface";
import styles from './Genre.module.css'

interface IProps {
    genre: IGenre
}

export const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre
    const {themeTrigger} = useAppSelector(state => state.theme)

    return (
        <div className={`${styles.genre} ${themeTrigger && styles.darkGenre}`}>
            <NavLink to={`/genres/${id}`}> {name} </NavLink>
        </div>
    );
};