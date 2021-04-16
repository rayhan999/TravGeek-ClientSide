import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-page-sec">
            <div className="container">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="contact-page-form" method="post">
                            <h2 className="text-center">Get in Touch</h2>
                            <form action="contact-mail.php" method="post">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input type="text" placeholder="Your Name" name="name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input type="email" placeholder="E-mail" name="email" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input type="text" placeholder="Phone Number" name="phone" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="single-input-field">
                                            <input type="text" placeholder="Subject" name="subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 message-input">
                                        <div className="single-input-field">
                                            <textarea placeholder="Write Your Message" name="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="single-input-fieldsbtn">
                                        <button className="btn" type="submit" >Send Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;