import {FC} from "react";
import {useNavigate} from "react-router-dom";

import styles from './Genre.module.css'

interface IProps {
    genre: {
        id: number,
        name: string
    }
}

export const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/genres/${id}`)} className={styles.genre}>
            {name}
        </div>
    );
};