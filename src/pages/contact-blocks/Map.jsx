import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  loadMap = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 34.730232, lng: 10.764942 },
      icon: {
        url: './assets/img/pin.png', // Replace with the path to your custom image
        scaledSize: new maps.Size(60, 86), // Adjust the size of your image
        origin: new maps.Point(0, 0),
        anchor: new maps.Point(30, 86), // Adjust the anchor point
      },
      map,
      draggable: false,
    });
  };
  render() {
    return (
      <div style={{ height: '600px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvBBkRwsKBHFKb2sqN5RZdHia6HyhVo-c' }}
          defaultCenter={{ lat: 34.730232, lng: 10.764942 }}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.loadMap(map, maps)}
        />
      </div>
    );
  }
}

export default Map;
