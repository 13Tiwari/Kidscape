// components/StyleSheet.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,          // Adds margin at the top
    width: 100,             // Adjust button width as needed
    height: 100,            // Adjust button height as needed to make it square
    borderRadius: 0,        // Removes rounded corners to make it square
  },
});
