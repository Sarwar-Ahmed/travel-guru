import React from 'react';
import './SpotSlider.css'
// import { CardDeck } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import fakeData from '../../fakeData/fakeData';
import { useHistory } from 'react-router-dom';


const SpotSlider = (props) => {
    const history = useHistory();
    const handleDestinationInfo = () =>{
        history.push('/destinationInfo')
    }
    return (
        <div className="card-deck">
            {
                fakeData.map(spot => {
                    console.log(spot)
                    return <div className="customCard bg-none">
                        <img className="card-img-top" src={spot.img} />
                        <div className="card-body ">
                            <h3 className="card-title">{spot.spotName}</h3>
                            <p className="card-text">{spot.highlight} </p>
                        </div>
                        <div className="card-footer">
                            <button className="bookingButton" onClick={() => handleDestinationInfo()}>Booking</button>
                        </div>
                    </div>
                })
            }
        </div>        
    );
};

export default SpotSlider;