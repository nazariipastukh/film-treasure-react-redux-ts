import {FC} from "react";
import {NavLink} from "react-router-dom";

import styles from './Genre.module.css'

interface IProps {
    genre: {
        id: number,
        name: string
    }
}

export const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre

    return (
        <div className={styles.genre}>
            <NavLink to={`/genres/${id}`}> {name} </NavLink>
        </div>
    );
};