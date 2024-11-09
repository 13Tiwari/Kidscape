// MyCustomButton.js
import React from 'react';
import { Button } from 'react-native-paper';

const CustomButton = ({ title, onPress, mode = 'contained', icon, color = '#6200ee' }) => {
  return (
    <Button
      mode={mode}               // 'contained', 'outlined', or 'text'
      icon={icon}               // e.g., "camera", "email", or any other material icon
      onPress={onPress}         // Button click handler
      color={color}             // Custom color for the button text or outline
      contentStyle={{
        paddingVertical: 6,     // Adjusts the height of the button
        paddingHorizontal: 12,  // Adjusts the width of the button
      }}
      labelStyle={{
        fontSize: 16,           // Adjusts the font size
        fontWeight: 'bold',     // Adds bold text
      }}
      style={{
        borderRadius: 8,        // Rounds button corners
        margin: 10,             // Adds margin around the button
      }}
    >
      {title}                   
    </Button>
  );
};

export default CustomButton;
