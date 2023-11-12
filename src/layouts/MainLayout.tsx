import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useTheme} from "../hooks";
import styles from './Theme.module.css'

export const MainLayout = () => {
    const {themeTrigger} = useTheme();

    return (
        <section className={`${styles.theme} ${themeTrigger && styles.darkTheme}`}>
            <Header/>
            <Outlet/>
        </section>
    );
};