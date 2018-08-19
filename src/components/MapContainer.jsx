import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {
        lat: 6.465422,
        lng: 3.406448
      },
      markers: []
    };
  }

  render() {
    const DisplayMaps = withGoogleMap((props) => {
      return (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={this.state.position}
        >
          {props.isMarkerShown && <Marker position={this.state.position} />}
          <MarkerWithLabel
            position={this.state.position}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{
              backgroundColor: 'black', color: 'white', fontSize: '12px', padding: '8px'
            }}
          >
            <div>Hello There!</div>
          </MarkerWithLabel>
        </GoogleMap>
      );
    });

    return (
      <div className="map">
        <DisplayMaps
          // isMarkerShown={true}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '731px', width: '620px', paddingTop: '82px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

export default MapContainer;
