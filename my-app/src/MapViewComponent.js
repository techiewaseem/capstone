import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapViewComponent = (props) => {
  const initialRegion = {
    latitude: 25.285447,
    longitude: 51.53104,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  return (
    <MapView
      style={[styles.map, props.style]}
      region={props.region || initialRegion}  // ✅ Fallback to initialRegion
      showsUserLocation={true}
      provider={MapView.PROVIDER_GOOGLE}
    >
      {props.markers && props.markers.map((marker, index) => (
        <Marker key={index} coordinate={marker.coordinate} title={marker.title} description={marker.description}>
          {marker.custom ? <Text style={{ fontSize: 30 }}>🚕</Text> : null}
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default MapViewComponent;
