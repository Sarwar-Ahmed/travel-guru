import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '75%'
};

export class GoogleMap extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                {
                    lat: 23.8103,
                    lng: 90.4125
                }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBN1mj9QcryZN776jj9gRFkux2AlX5tr5k")
  })(GoogleMap)