import {Header} from "../components";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <section>
            <Header/>
            <Outlet/>
        </section>
    );
};