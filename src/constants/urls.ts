const baseURL = process.env.REACT_APP_API_URL

const movies = '/discover/movie'
const genres = '/genre/movie/list'
const movie = `/movie`
const search = '/search/movie?query='

const urls = {
    movies,
    genres,
    search,
    popular: `${movie}/popular`,
    nowPlaying: `${movie}/now_playing`,
    topRated: `${movie}/top_rated`,
    upcoming: `${movie}/upcoming`,
    byId: (id: number) => `${movie}/${id}`,
    cast: (id: number) => `${movie}/${id}/credits`,
    byGenre: (genreId: string) => `${movies}?with_genres=${genreId}`
}

export {
    baseURL,
    urls
}