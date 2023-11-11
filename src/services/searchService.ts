import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    findMovie: (inputValue: string, page: string) =>
        apiService.get(`${urls.search}${inputValue}`, {params: {page}})
}

export {
    searchService
}