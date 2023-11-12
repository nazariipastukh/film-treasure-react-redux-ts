import styles from './User.module.css'
import {useTheme} from "../../hooks";

export const UserComponent = () => {
    const {themeTrigger} = useTheme()

    return (
        <section className={`${styles.userTheme} ${themeTrigger && styles.darkUser}`}>
            <a href={'https://github.com/nazariipastukh'} target="_blank" rel="noreferrer">
                <img className={styles.user} src={'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}
                     alt={'user'}/>
            </a>
            <p className={styles.name}>Nazarii</p>
        </section>
    );
};