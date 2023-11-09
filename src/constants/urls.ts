const baseURL = process.env.REACT_APP_API_URL

const movies = '/discover/movie'
const genres = '/genre/movie/list'
const movie = `/movie`

const urls = {
    movies,
    genres,
    byId: (id: number) => `${movie}/${id}`,
    cast: (id: number) => `${movie}/${id}/credits`,
    popular: `${movie}/popular`,
    nowPlaying: `${movie}/now_playing`,
    topRated: `${movie}/top_rated`,
    upcoming: `${movie}/upcoming`
}

export {
    baseURL,
    urls
}