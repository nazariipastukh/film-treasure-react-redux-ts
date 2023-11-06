import {useLocation} from "react-router-dom";

import {MovieDetails} from "../../components/Movies/MovieDetails";

export const MovieInfoPage = () => {
    const {state: id} = useLocation()

    return (
        <div>
            <MovieDetails id={id}/>
        </div>
    );
};