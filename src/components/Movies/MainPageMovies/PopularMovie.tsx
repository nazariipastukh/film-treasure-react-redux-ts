import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces/movieInterface";
import {StarRatingComponent} from "../../Rating";
import styles from "./PopularMovie.module.css";

interface IProps {
    movie: IMovie
}

export const PopularMovie: FC<IProps> = ({movie}) => {
    const {poster_path, vote_average, title, id} = movie
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.card}>
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
        </div>
    );
};