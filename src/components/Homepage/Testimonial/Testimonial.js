import React from 'react';
import './Testimonial.css';
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    return (
        <section>
            <div className="container">
                <div className="testimonial-title text-center">
                    <p>REVIEW & TESTIMONIALS</p>
                    <h2>Top Reviews for Travio</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 d-flex justify-content-center">
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                </div>
            </div>
        </section >
    );
};

export default Testimonial;