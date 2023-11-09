import {FC, useEffect, useState} from "react";

import {castService} from "../../../../../services";
import {Actor} from "./Actor";
import {IActor} from "../../../../../interfaces/actorInterface";
import styles from "../../Details.module.css";

interface IProps {
    movieId: number
}

export const CastComponent: FC<IProps> = ({movieId}) => {
    const [cast, setCast] = useState<IActor[]>()

    useEffect(() => {
        castService.getCast(movieId).then(({data}) => {
            setCast(data.cast.slice(0, 9))
        })
    }, [])

    return (
        <section className={styles.castComponent}>
            {
                cast && cast.map(actor => <Actor actor={actor} key={actor.id}/>)
            }
        </section>
    );
};