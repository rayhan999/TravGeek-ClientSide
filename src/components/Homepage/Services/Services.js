import React from 'react';
import './Services.css'
import ServiceBox from '../ServiceBox/ServiceBox';

const Services = () => {
    return (
        <section className="mt-5 mb-5 services">
            <div className="container">
                <div class="sec-title text-center pt-5 pb-5">
                    <p className="section-title">MODERN & BEAUTIFUL</p>
                    <h2>Our Most Popular Adventures</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center pb-5">
                    <ServiceBox></ServiceBox>
                    <ServiceBox></ServiceBox>
                    <ServiceBox></ServiceBox>
                </div>
            </div>
        </section>
    );
};

export default Services;