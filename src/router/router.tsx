import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layouts";
import {GenresPage, MainPage, MovieInfoPage, MoviesByGenrePage} from "../pages";
import {MoviesList} from "../components/Movies";
import {ErrorPage} from "../pages/ErrorPage";

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
                element: <MoviesList/>
            },
            {
                path: '/movie/:id',
                element: <MovieInfoPage/>
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