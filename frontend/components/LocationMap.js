import React, { useState, useEffect } from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import MapView, { Marker } from 'react-native-maps';

const LocationMap = () => {
  const [location, setLocation] = useState({
    latitude: 37.78825, 
    longitude: -122.4324, 
  });

  const [zoomLevel, setZoomLevel] = useState({
    // Default zoom level
    latitudeDelta: 0.0922, 
    longitudeDelta: 0.0421, 
  });

  useEffect(() => {
    fetch('https://ipinfo.io/json?token=2dfecacbc07752') 
      .then(response => response.json())
      .then(data => {
        if (data.loc) {
          const [latitude, longitude] = data.loc.split(','); 
          setLocation({
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          });

          setZoomLevel({
            // Zoom in closer for the current location
            latitudeDelta: 0.02, 
            longitudeDelta: 0.02, 
          });
        } else {
          console.error('Location data not found');
        }
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: zoomLevel.latitudeDelta,
            longitudeDelta: zoomLevel.longitudeDelta,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Current Location"
          />
        </MapView>
      </View>
    </View>
  );
};

export default LocationMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mapContainer: {
    width: '95%',
    height: '100%',
    borderWidth: 2,                
    borderColor: '#4CAF50',       
    borderRadius: 20,             
    overflow: 'hidden',             
  },
  map: {
    flex: 1,
  },
});
