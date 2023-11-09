import {FC} from "react";

interface IProps {
    countries: {
        iso_3166_1: string
        name: string
    } []
}

export const MovieCountries: FC<IProps> = ({countries}) => {
    return (
        <article>
            {
                countries.slice(0, 1).map(country => <div> {country.iso_3166_1}</div>)
            }
        </article>
    );
};