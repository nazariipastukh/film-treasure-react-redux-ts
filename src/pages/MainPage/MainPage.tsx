import {NowPlayingComponent, PopularComponent, TopRatedComponent, UpcomingComponent} from "../../components/Movies";
import styles from './MainPage.module.css'

export const MainPage = () => {
    return (
        <section>
            <section className={styles.backgroundImg}
                     style={{backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/67395b55-6af8-44a2-8f5d-de737761d26a/UA-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg)`}}>
            </section>
            <article className={styles.title}>
                <p>Welcome!</p>
            </article>
            <section className={styles.background}>
                <p className={styles.text}>Top rated</p>
                <TopRatedComponent/>
                <p className={styles.text}>Upcoming</p>
                <UpcomingComponent/>
                <p className={styles.text}>Popular</p>
                <PopularComponent/>
                <p className={styles.text}>Now playing</p>
                <NowPlayingComponent/>
            </section>
        </section>
    );
};