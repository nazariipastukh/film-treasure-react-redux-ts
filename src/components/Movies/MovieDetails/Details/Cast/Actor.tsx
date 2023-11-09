import {FC} from "react";

import {IActor} from "../../../../../interfaces/actorInterface";
import styles from './Actor.module.css'

interface IProps {
    actor: IActor
}

export const Actor: FC<IProps> = ({actor}) => {
    const {original_name, character, profile_path} = actor

    return (
        <section className={styles.actorCard}>
            {
                profile_path ? (
                    <img src={`${process.env.REACT_APP_POSTER_URL}/${profile_path}`} alt={original_name}/>
                ) : (
                    <img src={'https://4vector.com/i/free-vector-user-icon_101949_User_Icon.png'} alt={original_name}/>
                )
            }
            <p>{original_name}</p>
            <p className={styles.characterName}>{character}</p>
        </section>
    );
};