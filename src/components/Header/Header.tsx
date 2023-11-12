import React from 'react';
import {NavLink} from 'react-router-dom';
import {Switch} from '@mui/material';

import {UserComponent} from '../User';
import {SearchComponent} from '../Search';
import {useTheme} from "../../hooks";
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const {themeTrigger, toggleTheme} = useTheme();

    return (
        <header className={`${styles.header} ${themeTrigger && styles.dark}`}>
            <nav className={`${styles.links} ${themeTrigger && styles.dark}`}>
                <NavLink to={'/main'}> Main Page </NavLink>
                <NavLink to={'/movies'}> Movies </NavLink>
                <NavLink to={'/genres'}> Genres </NavLink>
            </nav>

            <section className={styles.logo}>
                <NavLink to={'/main'}>
                    {
                        themeTrigger ? (
                            <img src={'https://imageupload.io/ib/hR6kTVL3h0HBtKB_1699730812.jpg'} alt={'headerLogo'}/>
                        ) : (
                            <img src={'https://imageupload.io/ib/qxfdrYFJ1oSTKcl_1699297913.jpg'} alt={'headerLogo'}/>
                        )
                    }
                </NavLink>
            </section>

            <section className={styles.searchAndUser}>
                <section>
                    <SearchComponent/>
                </section>
                <Switch checked={themeTrigger} onClick={toggleTheme} color="primary"/>
                <UserComponent/>
            </section>
        </header>
    );
};