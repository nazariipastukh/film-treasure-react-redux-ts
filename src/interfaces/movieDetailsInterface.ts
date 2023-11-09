import {ICompany} from "./companyInterface";

export interface IMovieDetails {
    adult: boolean
    backdrop_path: string
    budget: number
    genres: {
        id: number,
        name: string
    }[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ICompany[]
    production_countries: {
        iso_3166_1: string
        name: string
    } []
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: []
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}