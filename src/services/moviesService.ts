import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getMovies: (page: string) => apiService.get(urls.movies, {params: {page}}),
    getMovieById: (id: number) => apiService.get(urls.byId(id)),
    getPopular: () => apiService.get(urls.popular),
    getNowPlaying: () => apiService.get(urls.nowPlaying),
    getUpcoming: () => apiService.get(urls.upcoming),
    getTopRated: () => apiService.get(urls.topRated,)
}

export {
    moviesService
}