import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton/Skeleton";

import {StarRatingComponent} from "../Rating";
import {IMovie} from "../../interfaces/movieInterface";
import styles from './Movie.module.css'

interface IProps {
    movie: IMovie
    showSkeleton: boolean
}

export const Movie: FC<IProps> = ({movie, showSkeleton}) => {
    const {poster_path, vote_average, title, id} = movie
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.card}>
            {
                !showSkeleton ? (
                    <div>
                        <Skeleton animation="wave" variant="rounded" width={'19.5vw'} height={'60vh'}/>
                        <Skeleton animation="wave" variant="text" width={'19.5vw'} sx={{fontSize: '3rem'}}/>
                    </div>
                ) : (
                    <div onMouseEnter={() => setIsActive(true)}
                         onMouseLeave={() => setIsActive(false)}
                         onClick={() => navigate(`/movie/${id}`, {state: id})}>

                        <img src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`} alt={title}/>
                        <p>{title}</p>

                        {isActive &&
                            <div className={styles.rating}>
                                <p className={styles.rate}>{vote_average}</p>
                                <StarRatingComponent divider={2} numberOfStars={5} vote={vote_average}/>
                            </div>
                        }
                    </div>
                )
            }
        </div>
    );
};