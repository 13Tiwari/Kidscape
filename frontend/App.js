import React, { useState, useEffect } from 'react'; 
import { Image, View, StyleSheet, Text } from 'react-native'; 
import CustomButton from './components/Button';
import EmergencyButton from './components/EmergencyButton';
import CrimeRateModal from './components/CrimeRateModal';
import ReportingModal from './components/ReportingModal'; 
import LocationMap from './components/LocationMap';
import { TOKEN } from '@env'; 

const AppScreen = () => {
  const [crimeRateModalVisible, setCrimeRateModalVisible] = useState(false);
  const [reportingModalVisible, setReportingModalVisible] = useState(false);
  const [buttonName, setButtonName] = useState('');
  const [city, setCity] = useState(''); 
  const [region, setRegion] = useState(''); 
  const [country, setCountry] = useState(''); 

    // Fetch city in App.js
    useEffect(() => {
      fetch(`https://ipinfo.io/json?token=${TOKEN}`) 
        .then(response => response.json())
        .then(data => {
          if (data.city) {
            setCity(data.city); 
          } else {
            setCity('Unknown City'); 
          }

          if (data.region) {
            setRegion(data.region); 
          } else {
            setRegion('Unknown Region'); 
          }

          if (data.country) {
            setCountry(data.country); 
          } else {
            setCountry('Unknown Region'); 
          }
        })
        .catch(error => {
          console.error('Error fetching location:', error);
          setCity('Error fetching city'); 
        });
    }, []);

  const handlePress = (name) => {
    setButtonName(name);
    if (name === 'Crime Rate') {
      setCrimeRateModalVisible(true);
    } else if (name === 'Reporting') {
      setReportingModalVisible(true);
    }
  };

  const closeModal = (name) => {
    if (name === 'Crime Rate') {
      setCrimeRateModalVisible(false);
    } else if (name === 'Reporting') {
      setReportingModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo.png')} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Crime Rate"
          onPress={() => handlePress('Crime Rate')}
          mode="contained"
          color="#ff5722"
        />
        <CustomButton
          title="Reporting"
          onPress={() => handlePress('Reporting')}
          mode="contained"
          color="#ff5722"
        />
      </View>

      <CrimeRateModal
        visible={crimeRateModalVisible}
        location={`${city}, ${region}, ${country}`}
        onClose={() => closeModal('Crime Rate')}
        crimePercentage={95}
      />

      <ReportingModal
        visible={reportingModalVisible}
        message={`${buttonName} button was pressed!`}
        onClose={() => closeModal('Reporting')}
      />

      <LocationMap />

      <View style={styles.emergencyButtonContainer}>
        <View style={styles.buttonRow}>
          <EmergencyButton
            title="Emergency 1"
            onPress={() => console.log('Button 1 pressed')}
            color="#FF5733"
          />
          <EmergencyButton
            title="Emergency 2"
            onPress={() => console.log('Button 2 pressed')}
            color="#FF5733"
          />
        </View>
        <View style={styles.buttonRow}>
          <EmergencyButton
            title="Emergency 3"
            onPress={() => console.log('Button 3 pressed')}
            color="#FF5733"
          />
          <EmergencyButton
            title="Emergency 4"
            onPress={() => console.log('Button 4 pressed')}
            color="#FF5733"
          />
        </View>
      </View>
    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  logo: {
    width: 200, 
    height: 200, 
    alignSelf: 'center',
    resizeMode: 'contain', 
  },
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'top',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGrid: {
    flexDirection: 'column',
    marginTop: 10, 
    paddingBottom: 20, 
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  emergencyButtonContainer: {
    marginTop: 20,
  },
});
