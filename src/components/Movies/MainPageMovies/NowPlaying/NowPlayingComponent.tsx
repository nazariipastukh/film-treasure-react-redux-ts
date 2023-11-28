import {useEffect, useState} from "react";

import {MovieCard} from "../MovieCard";
import {moviesService} from "../../../../services";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import styles from '../MoviesBlockWrapper.module.css'
import {mainPageActions} from "../../../../redux/slices/mainPageMoviesSlice";

export const NowPlayingComponent = () => {
    // const [nowMovies, setNowMovies] = useState([])
    // const [showSkeleton, setShowSkeleton] = useState(false);
    const {themeTrigger} = useAppSelector(state => state.theme)
    const {nowPlaying} = useAppSelector(state => state.mainPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(mainPageActions.getNowPlaying())
    },[])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowSkeleton(true);
    //     }, 1000);
    //
    //     moviesService.getNowPlaying().then(({data}) => {
    //         setNowMovies(data.results.slice(0, 7))
    //         setShowSkeleton(false)
    //     })
    // }, [])

    return (
        <section className={`${styles.moviesBlockWrapper} ${themeTrigger && styles.darkWrapper}`}>
            {
                nowPlaying.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </section>
    );
};