import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
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
                <div className="row text-white">
                    <div className="col-md-6">
                        {
                            fakeData.find()
                        }
                    </div>
                    <div className="col-md-6">
                        <h1>Tour Date</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DestinationInfo;