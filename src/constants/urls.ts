const baseURL = process.env.REACT_APP_API_URL

const movies = '/discover/movie'
const genres = '/genre/movie/list'
const movie = `/movie`

const urls = {
    movies,
    genres,
    byId: (id: number) => `${movie}/${id}`
}

export {
    baseURL,
    urls
}