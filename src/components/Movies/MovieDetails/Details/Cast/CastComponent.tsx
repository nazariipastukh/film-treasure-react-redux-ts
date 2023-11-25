import {FC, useEffect} from "react";

import {Actor} from "./Actor";
import {useAppDispatch, useAppSelector} from "../../../../../hooks/reduxHooks";
import {castActions} from "../../../../../redux/slices/castSlice";
import styles from "../../Details.module.css";

interface IProps {
    movieId: number
}

export const CastComponent: FC<IProps> = ({movieId}) => {
    const {cast} = useAppSelector(state => state.cast)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(castActions.getActors(movieId))
    }, [])

    return (
        <section className={styles.castComponent}>
            {
                cast && cast.map(actor => <Actor actor={actor} key={actor.id}/>)
            }
        </section>
    );
};