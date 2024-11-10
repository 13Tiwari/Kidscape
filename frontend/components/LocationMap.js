import React, { useState, useEffect } from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import MapView, { Marker } from 'react-native-maps';
import { TOKEN } from '@env';
import { MaterialIcons } from '@expo/vector-icons';

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
    fetch(`https://ipinfo.io/json?token=${TOKEN}`) 
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
              latitude: 40.349496,
              longitude: -74.657365,
            }}
            title="Warning: Dangerous Area"
          >
            <View style={{
              backgroundColor: 'yellow',
              padding: 5,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: 'orange',
            }}>
              <MaterialIcons name="warning" size={24} color="black" />
            </View>
          </Marker>

          <Marker
            coordinate={{
              latitude: 40.344000,
              longitude: -74.660000,
            }}
            title="Warning: Dangerous Area"
          >
            <View style={{
              backgroundColor: 'yellow',
              padding: 5,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: 'orange',
            }}>
              <MaterialIcons name="warning" size={24} color="black" />
            </View>
          </Marker>

          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Current location"
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
