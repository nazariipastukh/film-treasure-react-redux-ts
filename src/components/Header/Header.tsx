import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <NavLink to={'/main'}> Main Page </NavLink>
            <NavLink to={'/movies'}> Movies </NavLink>
            <NavLink to={'/genres'}> Genres </NavLink>
        </div>
    );
};