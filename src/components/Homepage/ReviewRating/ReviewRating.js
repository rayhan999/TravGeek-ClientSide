import ReactStars from "react-rating-stars-component";
import React from "react";

const ReviewRating = ({ ratingValue, isEditable }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="d-flex">
            <ReactStars
                count={5}
                value={ratingValue}
                onChange={ratingChanged}
                size={30}
                edit={isEditable}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            {/* <p>(26)</p> */}
        </div>
    );
};

export default ReviewRating;