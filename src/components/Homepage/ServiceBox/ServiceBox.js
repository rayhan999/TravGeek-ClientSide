import React from 'react';
import img from "../../../images/tour-1.jpg";

const ServiceBox = () => {
    return (
        <div class="col mb-3">
            <div class="card panda-card-item h-100 shadow  bg-white  border-0 rounded">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Nike Shoe</h5>
                    <p class="card-text">Lorem Ipsum is simply dummy text of the

                                printing and typesetting industry</p>

                </div>
                <div
                    class="card-footer  border-top-0 bg-white panda-card-footer d-flex justify-content-between">
                    <h5 id="price">$ 234</h5>
                    <button type="button" class=" btn d-block  "><i class="fa fa-shopping-cart"></i>&nbsp;Buy
                                Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBox;