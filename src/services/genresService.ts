import {apiService} from "./apiService";
import {urls} from "../constants";

const genresService = {
    getGenresList: () => apiService.get(urls.genres),
    getByGenre: (genreId: string, page: string) => apiService.get(urls.byGenre(genreId), {params: {page}})
}

export {
    genresService
}