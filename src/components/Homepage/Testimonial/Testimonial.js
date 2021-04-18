import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch(`https://powerful-earth-79300.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <section>
            <div className="container">
                <div className="testimonial-title text-center">
                    <p>REVIEW & TESTIMONIALS</p>
                    <h2>Top Reviews for Travio</h2>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 d-flex justify-content-center">
                    {
                        testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                    }

                    {/* <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard> */}
                </div>
            </div>
        </section >
    );
};

export default Testimonial;