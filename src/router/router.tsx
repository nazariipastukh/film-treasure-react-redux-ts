import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts";
import {
    GenresPage,
    MainPage,
    MovieInfoPage,
    MoviesByGenrePage,
    MoviesPage,
    ErrorPage,
    SearchResultsPage
} from "../pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Navigate to={'/main'}/>
            },
            {
                path: '/main',
                element: <MainPage/>
            },
            {
                path: '/movies',
                element: <MoviesPage/>
            },
            {
                path: '/movie/:id',
                element: <MovieInfoPage/>
            },
            {
                path: '/search/:inputValue',
                element: <SearchResultsPage/>
            },
            {
                path: '/genres',
                element: <GenresPage/>,
                children: [
                    {
                        path: ':id',
                        element: <MoviesByGenrePage/>
                    }
                ]
            }
        ]
    }
])

export {
    router
}