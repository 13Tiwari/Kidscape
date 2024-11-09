import React from 'react';
import { Button } from 'react-native-paper';

const CustomButton = ({ title, onPress, mode = 'contained', icon, color = '#6200ee' }) => {
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
        borderRadius: 30,        
        margin: 10,              
      }}
    >
      {title}                    
    </Button>
  );
};

export default CustomButton;
