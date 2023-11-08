import {FC} from "react";

import styles from './Details.module.css'
import {StarRatingComponent} from "../../Rating";
import {IMovieDetails} from "../../../interfaces/movieDetailsInterface";
import {Genre} from "../../Genres";
import Skeleton from "@mui/material/Skeleton/Skeleton";

interface IProps {
    movieDetails: IMovieDetails
    showSkeleton: boolean
}

export const MovieDetails: FC<IProps> = ({movieDetails, showSkeleton}) => {
    const {
        backdrop_path, id, title, vote_average, release_date, vote_count, genres,
        original_language, overview, poster_path, budget, homepage,
        imdb_id, tagline, production_companies, production_countries, runtime
    } = movieDetails

    console.log(movieDetails)

    const year = release_date.split('-').slice(0, 1)

    return (
        <div>
            {
                !showSkeleton ? (
                    <div className={styles.skeleton}>
                        <Skeleton animation="wave" variant="rounded" width={'100vw'} height={'35vh'}/>
                        <div className={styles.contentSkeletons}>
                            <Skeleton animation="wave" variant="rounded" width={'25vw'} height={'45vh'}/>
                            <Skeleton animation="wave" variant="rounded" width={'25vw'} height={'45vh'}/>
                            <Skeleton animation="wave" variant="rounded" width={'25vw'} height={'45vh'}/>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className={styles.detailsWrapper}
                             style={{backgroundImage: `url(${process.env.REACT_APP_POSTER_URL}${backdrop_path})`}}>
                        </div>

                        <div className={styles.title}>
                            <p>{title}</p>
                        </div>

                        <div className={styles.contentWrapper}>
                            <div className={styles.content}>
                                <img src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`} alt={title}/>

                                <div>
                                    {
                                        tagline && (
                                            <p className={styles.tag}>"{tagline}"</p>
                                        )
                                    }
                                    <div className={styles.rating}>
                                        <p className={styles.vote}>{vote_average.toFixed(1)} </p>
                                        <p className={styles.count}>({vote_count})</p>
                                        <StarRatingComponent divider={1} numberOfStars={10} vote={vote_average}/>
                                    </div>

                                    <div className={styles.overview}>
                                        <p>{overview}</p>
                                    </div>

                                    <div className={styles.time}>
                                        <p>{year} - {runtime} min </p>
                                    </div>

                                    <div className={styles.genres}>
                                        {
                                            genres.map(genre => <Genre genre={genre} key={genre}/>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};