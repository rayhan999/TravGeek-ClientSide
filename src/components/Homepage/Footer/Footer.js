import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserCircle, faCode, faGraduationCap, faTasks, faEnvelope, faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">

                <div className="widgets-section">
                    <div className="row clearfix">


                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">


                                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div className="footer-widget about-widget">
                                        <div className="logo">
                                            {/* <a href="#"><img src="https://i.ibb.co/wBkDzLb/ak-logo-red-blue.png" alt="" /></a> */}
                                        </div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam.</p>
                                            <p>Quis nostrud exercitation ullam aboris nisi aliquip exea commodo consequat duis aute irure.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h2>Quick Links</h2>
                                        <ul className="footer-list">
                                            <li><a href="#">Company History</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">


                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget gallery-widget">
                                        <h2>Gallery</h2>
                                        <div className="widget-content">
                                            <div className="http://t.commonsupport.com/morris/images-outer clearfix">

                                                <figure className="image-box"><a href="#" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt="" /></a></figure>

                                                <figure className="image-box"><a href="#" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="https://i.ibb.co/m5yGbdR/blog2.jpg" alt="" /></a></figure>

                                                <figure className="image-box"><a href="#" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt="" /></a></figure>

                                                <figure className="image-box"><a href="#" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="https://i.ibb.co/m5yGbdR/blog2.jpg" alt="" /></a></figure>

                                                <figure className="image-box"><a href="#" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt="" /></a></figure>

                                                <figure className="image-box"><a href="#" className="lightbox-image" data-fancybox="footer-gallery" title="Image Title Here" data-fancybox-group="footer-gallery"><img src="https://i.ibb.co/m5yGbdR/blog2.jpg" alt="" /></a></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget info-widget">
                                        <h2>Contact Info</h2>
                                        <ul className="info-list">
                                            <li>Flat 20, Reynolds Neck, North Hele naville, FV77 8WS</li>
                                            <li>+2(305) 587-3407</li>
                                            <li>info@morris.com</li>
                                        </ul>

                                        <ul className="social-links">
                                            <li className="google"><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                            <li className="facebook"><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                            <li className="instagram"><a href="#"><span className="fab fa-instagram"></span></a></li>
                                            <li className="twitter"><a href="#"><span className="fab fa-twitter"></span></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <div className="container">
                    <div className="row clearfix">

                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright"><span className="theme_color">Ak Web Designer</span> &copy; 2019 All Right Reserved</div>
                        </div>
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            <ul className="footer-nav">
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;