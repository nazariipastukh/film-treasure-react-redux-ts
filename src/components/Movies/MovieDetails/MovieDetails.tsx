import {FC} from "react";

import {StarRatingComponent} from "../../Rating";
import {IMovieDetails} from "../../../interfaces/movieDetailsInterface";
import {Genre} from "../../Genres";
import {CastComponent, MovieCountries, ProductionCompanies} from "./Details";
import {PopularComponent} from "../MainPageMovies";
import {useAppSelector} from "../../../hooks";
import styles from './Details.module.css'

interface IProps {
    movieDetails: IMovieDetails
}

export const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {
        backdrop_path, id, title, vote_average, release_date, vote_count, genres,
        overview, poster_path, homepage,
        imdb_id, tagline, production_companies, production_countries, runtime
    } = movieDetails

    const year = release_date.split('-').slice(0, 1)
    const {themeTrigger} = useAppSelector(state => state.theme)

    return (
        <section>
            {
                // !showSkeleton ? (
                //     <SkeletonComponent/>
                // ) : (
                <section className={`${styles.text} ${themeTrigger && styles.darkText}`}>
                    <section className={styles.detailsWrapper}
                             style={{backgroundImage: `url(${process.env.REACT_APP_POSTER_URL}${backdrop_path})`}}>
                    </section>
                    <article className={styles.title}>
                        <p style={{color: '#f8f7f4'}}>{title}</p>
                    </article>
                    <section className={`${styles.contentWrapper} ${themeTrigger && styles.darkContentWrapper} `}>
                        <section className={styles.content}>
                            {
                                poster_path ? (
                                    <img className={styles.contentImg}
                                         src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`} alt={title}/>
                                ) : (
                                    <img className={styles.notFoundImg}
                                         src={'https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/106897EA.jpg&w=500&zc=1'}
                                         alt={title}/>
                                )
                            }
                            <section>
                                {
                                    tagline && (
                                        <p className={`${styles.tag} ${themeTrigger && styles.darkTag}`}>"{tagline}"</p>
                                    )
                                }
                                <article className={`${styles.rating} ${themeTrigger && styles.darkRating}`}>
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
                                <article className={`${styles.time} ${themeTrigger && styles.darkTime}`}>
                                    <p>{runtime} min - {year},&nbsp;
                                        <MovieCountries countries={production_countries}/>
                                    </p>
                                </article>
                                <article className={`${styles.overview} ${themeTrigger && styles.darkOverview}`}>
                                    <p>{overview}</p>
                                </article>
                                <article>
                                    <ProductionCompanies production={production_companies}/>
                                </article>
                                <article className={`${styles.links} ${themeTrigger && styles.darkLinks}`}>
                                    {
                                        imdb_id && (
                                            <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank"
                                               rel="noreferrer">
                                                IMDB
                                            </a>)
                                    }
                                    {
                                        homepage && (
                                            <a href={homepage} target="_blank" rel="noreferrer">
                                                Home page
                                            </a>)
                                    }
                                </article>
                            </section>
                            <section>
                                <CastComponent movieId={id} key={id}/>
                            </section>
                        </section>
                    </section>
                    <section className={`${styles.popular} ${themeTrigger && styles.darkPopular}`}>
                        <PopularComponent/>
                    </section>
                </section>
                // )
            }
        </section>
    );
};