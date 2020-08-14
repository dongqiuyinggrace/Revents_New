import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Segment, Icon } from 'semantic-ui-react';

const Marker = () => <Icon name='marker' color='red' size='large' />;

const EventDetailedMap = ({ latLng }) => {
  console.log("mapCenter: ", latLng);
  const zoom = 14;
  return (
    <Segment
      attached='bottom'
      style={{ height: '50vh', width: '100%', padding: 0 }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'Key' }}
        center={latLng}
        zoom={zoom}
      >
        <Marker lat={latLng.lat} lng={latLng.lng} />
      </GoogleMapReact>
    </Segment>
    // Important! Always set the container height explicitly
  );
};

export default EventDetailedMap;

//<AnyReactComponent lat={defaultProps.center.lat} lng={defaultProps.center.lng} text='My Marker' />
