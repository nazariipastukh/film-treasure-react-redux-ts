import {FC} from "react";
import StarRatings from "react-star-ratings";

interface IProps {
    vote: number
    divider: number
    numberOfStars: number
    starDimension: string
    starSpacing: string
}

export const StarRatingComponent: FC<IProps> = ({vote, divider, numberOfStars, starDimension, starSpacing}) => {
    return (
        <StarRatings
            rating={vote / divider}
            numberOfStars={numberOfStars}
            starDimension={starDimension}
            starSpacing={starSpacing}
            starRatedColor='#FDCC0D'
            starEmptyColor='#e3e1e1'
        />
    );
};