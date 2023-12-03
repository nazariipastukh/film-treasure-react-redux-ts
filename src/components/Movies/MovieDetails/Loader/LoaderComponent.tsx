import Skeleton from "@mui/material/Skeleton/Skeleton";

import styles from "../Details.module.css";

export const LoaderComponent = () => {
    return (
        <section>
            <div className={styles.skeleton}>
                <Skeleton animation="wave" variant="rounded" width={'100vw'} height={'35vh'}/>
                <div className={styles.contentSkeletons}>
                    <Skeleton animation="wave" variant="rounded" width={'26vw'} height={'45vh'}/>
                    <Skeleton animation="wave" variant="rounded" width={'26vw'} height={'45vh'}/>
                    <Skeleton animation="wave" variant="rounded" width={'26vw'} height={'45vh'}/>
                </div>
            </div>
        </section>
    );
};