import {apiService} from "./apiService";
import {urls} from "../constants";

const castService = {
    getCast: (id: number) => apiService.get(urls.cast(id))
}

export {
    castService
}