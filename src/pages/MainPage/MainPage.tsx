import {NowPlayingComponent, PopularComponent, TopRatedComponent, UpcomingComponent} from "../../components";
import {useAppSelector} from "../../hooks";
import styles from './MainPage.module.css'

export const MainPage = () => {
    const {themeTrigger} = useAppSelector(state => state.theme)

    return (
        <section>
            <section className={styles.backgroundImg}
                     style={{backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/67395b55-6af8-44a2-8f5d-de737761d26a/UA-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg)`}}>
            </section>
            <article className={styles.title}>
                <p>Welcome!</p>
            </article>
            <section className={`${styles.background} ${themeTrigger ? styles.darkBackground : ''}`}>
                <p className={`${styles.text} ${themeTrigger && styles.darkText}`}>Top rated</p>
                <TopRatedComponent/>
                <p className={`${styles.text} ${themeTrigger && styles.darkText}`}>Upcoming</p>
                <UpcomingComponent/>
                <p className={`${styles.text} ${themeTrigger && styles.darkText}`}>Popular</p>
                <PopularComponent/>
                <p className={`${styles.text} ${themeTrigger && styles.darkText}`}>Now playing</p>
                <NowPlayingComponent/>
            </section>
        </section>
    );
};