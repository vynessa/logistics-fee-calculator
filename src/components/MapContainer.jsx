import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';

class MapContainer extends Component {
  render() {
    const DisplayMaps = withGoogleMap((props) => {
      return (
        <div>
          <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 6.465422, lng: 3.406448 }}
          >
            {props.isMarkerShown && <Marker position={{ lat: 6.465422, lng: 3.406448 }} />}
          </GoogleMap>
          <MarkerWithLabel
            position={{ lat: 6.465422, lng: 3.406448 }}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{ backgroundColor: 'yellow', fontSize: '32px', padding: '16px' }}
          >
            <div>Hello There!</div>
          </MarkerWithLabel>
        </div>
      );
    });

    return (
      <div>
        <DisplayMaps
          // isMarkerShown={true}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px', width: '720px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

export default MapContainer;
