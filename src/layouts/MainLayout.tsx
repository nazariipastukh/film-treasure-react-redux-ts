import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useAppSelector} from "../hooks/reduxHooks";
import styles from './Theme.module.css'

export const MainLayout = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)

    return (
        <section className={`${styles.theme} ${themeTrigger && styles.darkTheme}`}>
            <Header/>
            <Outlet/>
        </section>
    );
};