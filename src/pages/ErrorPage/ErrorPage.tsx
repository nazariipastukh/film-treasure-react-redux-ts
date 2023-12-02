import {useAppSelector} from "../../hooks";
import styles from './ErrorPage.module.css'

export const ErrorPage = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)

    return (
        <section className={`${styles.errorPage} ${themeTrigger && styles.darkErrorPage}`}>
            <img src={'https://imageupload.io/ib/8PpD7hYSDCcItuB_1699789853.png'} alt={'error'}/>
        </section>
    );
};