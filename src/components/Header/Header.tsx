import {NavLink} from "react-router-dom";

import {UserComponent} from "../User";
import {SearchComponent} from "../Search";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.links}>
                <NavLink to={'/main'}> Main Page </NavLink>
                <NavLink to={'/movies'}> Movies </NavLink>
                <NavLink to={'/genres'}> Genres </NavLink>
            </nav>

            <section className={styles.logo}>
                <NavLink to={'/main'}>
                    <img src={'https://imageupload.io/ib/qxfdrYFJ1oSTKcl_1699297913.jpg'} alt={'headerLogo'}/>
                </NavLink>
            </section>

            <section className={styles.searchAndUser}>
                <section>
                    <SearchComponent/>
                </section>
                <UserComponent/>
            </section>
        </header>
    );
};