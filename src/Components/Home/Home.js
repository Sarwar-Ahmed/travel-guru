import React, { useState } from 'react';
import SpotSlider from '../Slider/SpotSlider';
import './Home.css';

const Home = () => {
    return (
        <div className="container-fluid home-container">
            <div className="container">
                <div>
                    <SpotSlider />
                </div>

            </div>
        </div>
    );
};

export default Home;