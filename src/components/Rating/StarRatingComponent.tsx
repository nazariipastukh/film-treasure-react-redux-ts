import {FC} from "react";
import StarRatings from "react-star-ratings";

interface IProps {
    vote: number
}

export const StarRatingComponent: FC<IProps> = ({vote}) => {
    return (
        <StarRatings
            rating={vote / 2}
            starDimension="15px"
            starSpacing="15px"
        />
    );
};