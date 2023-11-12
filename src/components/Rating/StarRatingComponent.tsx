import {FC} from "react";
import StarRatings from "react-star-ratings";

import {IStarRating} from "../../interfaces/starRatingInterface";

export const StarRatingComponent: FC<IStarRating> = ({vote, divider, numberOfStars, starDimension, starSpacing}) => {
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