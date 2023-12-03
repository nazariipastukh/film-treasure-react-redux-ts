import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton/Skeleton";

import {StarRatingComponent} from "../../Rating";
import {IMovie} from "../../../interfaces/movieInterface";
import {useAppSelector} from "../../../hooks";
import styles from './Movie.module.css'

interface IProps {
    movie: IMovie
}

export const Movie: FC<IProps> = ({movie}) => {
    const {poster_path, vote_average, title, id} = movie
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    const {themeTrigger} = useAppSelector(state => state.theme)
    const {loader} = useAppSelector(state => state.loader)

    return (
        <section className={styles.card}>
            {
                loader ? (
                    <section>
                        <Skeleton animation="wave" variant="rounded" width={'19.5vw'} height={'60vh'}/>
                        <Skeleton animation="wave" variant="text" width={'19.5vw'} sx={{fontSize: '3rem'}}/>
                    </section>
                ) : (
                    <div onMouseEnter={() => setIsActive(true)}
                         onMouseLeave={() => setIsActive(false)}
                         onClick={() => navigate(`/movie/${id}`, {state: id})}>
                        {
                            poster_path ? (
                                <img src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`} alt={title}/>
                            ) : (
                                <img className={styles.notFound}
                                     src={'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/106897EA.jpg&w=500&zc=1'}
                                     alt={title}/>
                            )
                        }
                        <p className={themeTrigger && `${styles.darkTitle}`}>
                            {title}
                        </p>
                        {isActive &&
                            <div className={styles.rating}>
                                <p className={styles.rate}>{vote_average.toFixed(1)}</p>
                                <StarRatingComponent
                                    divider={2} numberOfStars={5} vote={vote_average}
                                    starDimension={'20px'} starSpacing={'10px'}
                                />
                            </div>
                        }
                    </div>
                )
            }
        </section>
    );
};