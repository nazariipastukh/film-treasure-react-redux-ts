import {useLocation} from "react-router-dom";

import {MovieDetailsComponent} from "../../components";

export const MovieInfoPage = () => {
    const {state: id} = useLocation()

    return (
        <MovieDetailsComponent id={id}/>
    );
};