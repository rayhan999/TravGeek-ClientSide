import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="header mb-5">
            <Navbar></Navbar>
            <div className="container">
                <div className="col-md-6 top-part d-flex align-items-center">
                    <div>
                        <h1 className="header-title">Explore <br /> Your Travel</h1>
                        <p className="header-description">Discover your next great adventure, become an explorer to get started!</p>
                        <button className="btn btn-primary">
                            Book Now
                    </button>
                    </div>
                </div>

            </div>
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L30,165.3C60,171,120,181,180,165.3C240,149,300,107,360,117.3C420,128,480,192,540,181.3C600,171,660,85,720,69.3C780,53,840,107,900,138.7C960,171,1020,181,1080,170.7C1140,160,1200,128,1260,112C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
        </div>
    );
};

export default Header;