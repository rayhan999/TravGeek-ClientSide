import React from 'react';
import img from "../../../images/tour-1.jpg";

import ReviewRating from '../ReviewRating/ReviewRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const ServiceBox = (props) => {
    console.log(props.service);
    const { name, cost, days, location, description, image, _id } = props.service;
    return (
        <div class="col mb-3">
            <div class="card panda-card-item h-100 shadow  bg-white  border-0 rounded">
                <img src={`data:image/png;base64,${props.service.image.img}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    {/* <ReviewRating ratingValue={4.5} isEditable={false}></ReviewRating> */}
                    <h5 class="card-title">{name}</h5>
                    <h5 id="price">$ {cost} /per person</h5>
                    <div className="d-flex pt-3 mt-3 mb-3 justify-content-center" style={{ textAlign: 'center', backgroundColor: "gray", borderRadius: "10px" }}>
                        <FontAwesomeIcon icon={faClock} className="text-white"></FontAwesomeIcon>
                        <p className="pl-2 text-white">{days} days</p>
                        <p className="pl-2 pr-2 text-white">|</p>
                        <FontAwesomeIcon icon={faMapMarker} className="text-white"></FontAwesomeIcon>
                        <p className="pl-2 text-white">{location}</p>
                    </div>
                    <p class="card-text">{description}</p>

                </div>
                <div
                    class="card-footer  border-top-0 bg-white d-flex justify-content-center">
                    <div className="col-md-6">
                        <button type="button" class=" btn d-block  "><i class="fa fa-book"></i>&nbsp;See Dteails</button>
                    </div>
                    <div className="col-md-6">
                        <Link to={`/book/${_id}`} >
                            <button type="button" class=" btn d-block  "><i class="fa fa-shopping-cart"></i>&nbsp;Buy
                                Now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceBox;