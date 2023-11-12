import {FC} from "react";

import {ICompany} from "../../../../interfaces/companyInterface";
import {useTheme} from "../../../../hoc";
import styles from './Companies.module.css'

interface IProps {
    production: ICompany[]
}

export const ProductionCompanies: FC<IProps> = ({production}) => {
    const {themeTrigger} = useTheme();

    return (
        <article className={styles.companyName}>
            {
                production.map(company => <div className={themeTrigger && styles.darkCompanyName}><p>{company.name}</p></div>)
            }
        </article>
    );
};