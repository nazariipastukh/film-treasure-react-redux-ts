import {FC} from "react";
import StarRatings from "react-star-ratings";

interface IProps {
    vote: number
    divider: number
    numberOfStars: number
}

export const StarRatingComponent: FC<IProps> = ({vote, divider, numberOfStars}) => {
    return (
        <StarRatings
            rating={vote / divider}
            numberOfStars={numberOfStars}
            starDimension="20px"
            starSpacing="10px"
            starRatedColor='#FDCC0D'
            starEmptyColor='#e3e1e1'
        />
    );
};