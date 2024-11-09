import React from 'react';
import { Button } from 'react-native-paper';

const EmergencyButton = ({ title, onPress, mode = 'contained', icon, color = '#6200ee' }) => {
  return (
    <Button
      mode={mode}               
      icon={icon}               
      onPress={onPress}         
      color={color}             
      labelStyle={{
        fontSize: 16,            
        fontWeight: 'bold',      
      }}
      style={{
        borderRadius: 10,        
        height: 50,
        width: '45%',
        justifyContent: 'center',              
      }}
    >
      {title}                    
    </Button>
  );
};

export default EmergencyButton;
