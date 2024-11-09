import React, { useState } from 'react';
import { View } from 'react-native';
import CustomButton from './components/Button';
import CrimeRateModal from './components/CrimeRateModal';
import ReportingModal from './components/ReportingModal';
import styles from './components/StyleSheet';

const AppScreen = () => {
  const [crimeRateModalVisible, setCrimeRateModalVisible] = useState(false);
  const [reportingModalVisible, setReportingModalVisible] = useState(false);
  const [buttonName, setButtonName] = useState('');

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
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.button}
          title="Crime Rate"
          onPress={() => handlePress('Crime Rate')}
          mode="contained"
          color="#ff5722"
        />
        <CustomButton
          style={styles.button}
          title="Reporting"
          onPress={() => handlePress('Reporting')}
          mode="contained"
          color="#ff5722"
        />
      </View>

      <CrimeRateModal
        visible={crimeRateModalVisible}
        message={`${buttonName} button was pressed!`}
        onClose={() => closeModal('Crime Rate')}
      />

      <ReportingModal
        visible={reportingModalVisible}
        message={`${buttonName} button was pressed!`}
        onClose={() => closeModal('Reporting')}
      />
    </View>
  );
};

export default AppScreen;
