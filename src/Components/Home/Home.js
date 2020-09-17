import React, { useState } from 'react';
import DestinationInfo from '../DestinationInfo/DestinationInfo';
import Header from '../Header/Header';
import SpotSlider from '../Slider/SpotSlider';
import './Home.css';

const Home = () => {
    const [navCollapsed, setNavCollapsed] = useState(true);
    const [destinationInfo, setDestinationInfo] = useState(false);

    const handleNavCollapsed = () =>{
        setNavCollapsed(!navCollapsed);
    }

    
    return (
        <div className="container-fluid">
            <div className="container">
                <Header handleNavCollapsed={handleNavCollapsed} navCollapsed={navCollapsed}/>
                <div>
                    <SpotSlider />
                </div>

            </div>
        </div>
    );
};

export default Home;