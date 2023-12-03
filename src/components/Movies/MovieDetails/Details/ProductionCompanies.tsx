import {FC} from "react";

import {ICompany} from "../../../../interfaces/companyInterface";
import {useAppSelector} from "../../../../hooks";
import styles from './Companies.module.css'

interface IProps {
    production: ICompany[]
}

export const ProductionCompanies: FC<IProps> = ({production}) => {
    const {themeTrigger} = useAppSelector(state => state.theme)

    return (
        <article className={styles.companyName}>
            {
                production.map((company, index) =>
                    <div className={themeTrigger && styles.darkCompanyName} key={index}>
                        <p>{company.name}</p>
                    </div>)
            }
        </article>
    );
};