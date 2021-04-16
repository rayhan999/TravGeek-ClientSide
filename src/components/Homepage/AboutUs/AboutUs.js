import React from 'react';
import './AboutUs.css';
import about from '../../../images/about-1.jpg';

const AboutUs = () => {
    return (
        <section >
            <div className="mt-5 mb-5 container d-flex align-items-center">
                <div className="row ">
                    <div className="aboutUs-row col-md-1 "></div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <div class="rounded-3 shadow" style={{ width: "20rem" }}>
                            <img src={about} class="card-img-top p-2" alt="..." />

                        </div>
                    </div>
                    <div className="col-md-5">
                        <p className="section-title">ABOUT TRAVIO</p>
                        <h2>World Best Travel Agency Company Since 2008.</h2>
                        <p className="section-description">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;