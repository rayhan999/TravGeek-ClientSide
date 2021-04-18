import React, { useEffect } from 'react';
import testimonial from '../../../images/testimonial-1.png'
import quote from '../../../images/quote-1.png'
import ReviewRating from '../ReviewRating/ReviewRating';

const TestimonialCard = (props) => {
    // console.log(props.testimonial.description);
    const { name, org, description, rating, photo } = props.testimonial
    return (
        <div className="col mb-3 mt-3 d-flex justify-content-center">
            <div className="testimonial-card" >
                <div className="text section-description text-center" style={{ background: `no-repeat center url(${quote})` }}>
                    <p className="text-center">{description}</p>
                    <p className="pb-3 d-flex justify-content-center"><ReviewRating ratingValue={rating} isEditable={false}></ReviewRating></p>
                </div>



                <div className="footer">
                    <div className="image" style={{ backgroundImage: `url(${photo})` }}>

                    </div>
                    <h3 className='person mt-4'>{name}</h3>
                    <p className="person-details">{org}</p>


                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;