import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getMovies: () => apiService.get(urls.movies)
}

export {
    moviesService
}