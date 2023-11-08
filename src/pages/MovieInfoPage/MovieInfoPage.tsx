import {useLocation} from "react-router-dom";

import {MovieDetailsComponent} from "../../components/Movies/MovieDetails";

export const MovieInfoPage = () => {
    const {state: id} = useLocation()

    return (
        <div>
            <MovieDetailsComponent id={id}/>
        </div>
    );
};