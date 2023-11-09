import {FC} from "react";

import {StarRatingComponent} from "../../Rating";
import {IMovieDetails} from "../../../interfaces/movieDetailsInterface";
import {Genre} from "../../Genres";
import {SkeletonComponent} from "./SkeletonComponent";
import {MovieCountries} from "./Details/MovieCountries";
import {CastComponent} from "./Cast/CastComponent";
import {ProductionCompanies} from "./Details/ProductionCompanies";
import {PopularComponent} from "../MainPageMovies/PopularComponent";
import styles from './Details.module.css'

interface IProps {
    movieDetails: IMovieDetails
    showSkeleton: boolean
}

export const MovieDetails: FC<IProps> = ({movieDetails, showSkeleton}) => {
    const {
        backdrop_path, id, title, vote_average, release_date, vote_count, genres,
        overview, poster_path, homepage,
        imdb_id, tagline, production_companies, production_countries, runtime
    } = movieDetails

    const year = release_date.split('-').slice(0, 1)

    return (
        <div>
            {
                !showSkeleton ? (
                    <SkeletonComponent/>
                ) : (
                    <div>
                        <section className={styles.detailsWrapper}
                                 style={{backgroundImage: `url(${process.env.REACT_APP_POSTER_URL}${backdrop_path})`}}>
                        </section>
                        <article className={styles.title}>
                            <p>{title}</p>
                        </article>
                        <section className={styles.contentWrapper}>
                            <section className={styles.content}>
                                <img src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`} alt={title}/>
                                <section>
                                    {
                                        tagline && (
                                            <p className={styles.tag}>"{tagline}"</p>
                                        )
                                    }
                                    <article className={styles.rating}>
                                        <p className={styles.vote}>{vote_average.toFixed(1)} </p>
                                        <p className={styles.count}>({vote_count})</p>
                                        <StarRatingComponent
                                            divider={1} numberOfStars={10} vote={vote_average}
                                            starSpacing={'10px'} starDimension={'21px'}
                                        />
                                    </article>
                                    <article className={styles.genres}>
                                        {
                                            genres.map(genre => <Genre genre={genre} key={genre.id}/>)
                                        }
                                    </article>
                                    <article className={styles.time}>
                                        <p>{runtime} min - {year},&nbsp;
                                            <MovieCountries countries={production_countries}/>
                                        </p>
                                    </article>
                                    <article className={styles.overview}>
                                        <p>{overview}</p>
                                    </article>
                                    <article>
                                        <ProductionCompanies production={production_companies}/>
                                    </article>
                                    <article className={styles.links}>
                                        <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank">
                                            IMDB
                                        </a>
                                        <a href={homepage} target="_blank">
                                            Home page
                                        </a>
                                    </article>
                                </section>
                                <section>
                                    <CastComponent movieId={id} key={id}/>
                                </section>
                            </section>
                        </section>
                        <section>
                            <PopularComponent/>
                        </section>
                    </div>
                )
            }
        </div>
    );
};