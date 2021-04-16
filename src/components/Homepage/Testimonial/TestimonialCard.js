import React from 'react';
import testimonial from '../../../images/testimonial-1.png'
import quote from '../../../images/quote-1.png'

const TestimonialCard = () => {
    return (
        <div className="col mb-3 mt-3 d-flex justify-content-center">
            <div className="testimonial-card" >
                <div className="text section-description text-center" style={{ background: `no-repeat center url(${quote})` }}>
                    <p >Lorem ipsum dolor sit amet consectetur elit. Ipsa voluptatum ipsum, laudantium minima aliquam porro? Iste,  Et, esta ah </p>
                    <p className="pb-3">rating</p>
                </div>



                <div className="footer">
                    <div className="image" style={{ backgroundImage: `url(${testimonial})` }}>

                    </div>
                    <h3 className='person mt-4'>Jane Doe</h3>
                    {/* <p className="person-details">CEO,Microsoft</p> */}


                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;