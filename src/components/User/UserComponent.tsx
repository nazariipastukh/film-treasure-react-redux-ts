import styles from './User.module.css'

export const UserComponent = () => {
    return (
        <section>
            <a href={'https://github.com/nazariipastukh'} target="_blank" rel="noreferrer">
                <img className={styles.user} src={'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}
                     alt={'user'}/>
            </a>
        </section>
    );
};