import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces/movieInterface";
import {StarRatingComponent} from "../../Rating";
import styles from "./MainPageMovie.module.css";
import Skeleton from "@mui/material/Skeleton/Skeleton";

interface IProps {
    movie: IMovie
    showSkeleton: boolean
}

export const MovieCard: FC<IProps> = ({movie, showSkeleton}) => {
    const {poster_path, vote_average, title, id} = movie
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    return (
        <section className={styles.card}>
            {
                !showSkeleton ? (
                    <section>
                        <Skeleton animation="wave" variant="rounded" width={'11.5vw'} height={'35vh'}/>
                        <Skeleton animation="wave" variant="text" width={'11.5vw'} sx={{fontSize: '3rem'}}/>
                    </section>
                ) : (
                    <div onMouseEnter={() => setIsActive(true)}
                         onMouseLeave={() => setIsActive(false)}
                         onClick={() => navigate(`/movie/${id}`, {state: id})}>

                        <img src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`} alt={title}/>
                        <p>{title}</p>

                        {isActive &&
                            <div className={styles.rating}>
                                <p className={styles.rate}>{vote_average}</p>
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