import {Outlet} from "react-router-dom";

import {GenresList} from "../../components";

export const GenresPage = () => {
    return (
        <div>
            <GenresList/>
            <Outlet/>
        </div>
    );
};