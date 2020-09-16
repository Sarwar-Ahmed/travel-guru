import React, { useState } from 'react';
import Header from '../Header/Header';


const DestinationInfo = () => {
    const [navCollapsed, setNavCollapsed] = useState(true);
    const handleNavCollapsed = () =>{
        setNavCollapsed(!navCollapsed);
    }
    return (
        <div className="container-fluid">
            <div className="container">
                <Header handleNavCollapsed={handleNavCollapsed} navCollapsed={navCollapsed}/>
                <div>
                    <h1 className="text-white">this is DestinationInfo</h1>
                </div>

            </div>
        </div>
    );
};

export default DestinationInfo;