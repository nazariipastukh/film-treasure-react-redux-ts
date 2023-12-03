import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton/Skeleton";

import {IMovie} from "../../../interfaces/movieInterface";
import {StarRatingComponent} from "../../Rating";
import {useAppSelector} from "../../../hooks";
import styles from "./MainPageMovie.module.css";

interface IProps {
    movie: IMovie
}

export const MovieCard: FC<IProps> = ({movie}) => {
    const {poster_path, vote_average, title, id} = movie
    const navigate = useNavigate()

    const [isActive, setIsActive] = useState(false)
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {loaderTrigger} = useAppSelector(state => state.mainPage)

    return (
        <section className={styles.card}>
            {
                loaderTrigger ? (
                    <section>
                        <Skeleton animation="wave" variant="rounded" width={'11.5vw'} height={'35vh'}/>
                        <Skeleton animation="wave" variant="text" width={'11.5vw'} sx={{fontSize: '3rem'}}/>
                    </section>
                ) : (
                    <div onMouseEnter={() => setIsActive(true)}
                         onMouseLeave={() => setIsActive(false)}
                         onClick={() => navigate(`/movie/${id}`, {state: id})}>

                        <img src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`} alt={title}/>
                        <p className={themeTrigger && `${styles.darkTitle}`}>
                            {title}
                        </p>

                        {isActive &&
                            <div className={styles.rating}>
                                <p style={{color: '#f8f7f4'}}>{vote_average.toFixed(1)}</p>
                                <StarRatingComponent
                                    divider={2} numberOfStars={5} vote={vote_average}
                                    starSpacing={'8px'} starDimension={'13px'}
                                />
                            </div>
                        }
                    </div>
                )
            }
        </section>
    );
};