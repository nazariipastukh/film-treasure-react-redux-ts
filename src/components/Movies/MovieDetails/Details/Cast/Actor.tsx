import {FC} from "react";

import {IActor} from "../../../../../interfaces/actorInterface";
import {useAppSelector} from "../../../../../hooks";
import styles from './Actor.module.css'

interface IProps {
    actor: IActor
}

export const Actor: FC<IProps> = ({actor}) => {
    const {original_name, character, profile_path} = actor

    const {themeTrigger} = useAppSelector(state => state.theme)

    return (
        <section className={`${styles.actorCard} ${themeTrigger && styles.dark}`}>
            {
                profile_path ? (
                    <img src={`${process.env.REACT_APP_POSTER_URL}/${profile_path}`} alt={original_name}/>
                ) : (
                    <img className={styles.notFoundImg}
                         src={'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}
                         alt={original_name}/>
                )
            }
            <p>{original_name}</p>
            <p className={styles.characterName}>{character}</p>
        </section>
    );
};