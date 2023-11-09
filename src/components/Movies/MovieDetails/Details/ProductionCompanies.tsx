import {FC} from "react";

import {ICompany} from "../../../../interfaces/companyInterface";
import styles from './Companies.module.css'

interface IProps {
    production: ICompany[]
}

export const ProductionCompanies: FC<IProps> = ({production}) => {
    return (
        <div className={styles.companyName}>
            {
                production.map(company => <div><p>{company.name}</p></div>
                )
            }
        </div>
    );
};