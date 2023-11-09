import {apiService} from "./apiService";
import {urls} from "../constants";

const popularService = {
    getPopular: () => apiService.get(urls.popular)
}

export {
    popularService
}