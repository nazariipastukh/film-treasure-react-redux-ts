import {useLocation} from "react-router-dom";

import {MovieDetailsComponent} from "../../components/Movies";

export const MovieInfoPage = () => {
    const {state: id} = useLocation()

    return (
        <section>
            <MovieDetailsComponent id={id}/>
        </section>
    );
};