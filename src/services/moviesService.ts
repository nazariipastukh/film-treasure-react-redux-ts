import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getMovies: () => apiService.get(urls.movies),
    getMovieById: (id: number) => apiService.get(urls.byId(id))
}

export {
    moviesService
}