import { COLORS } from '@constants/colors';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false); // Initial state is off

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: isOn ? COLORS.mutedBlue : 'gray', // Green when on, gray when off
            width: isOn ? 80 : 120, // Slightly larger when off (longer when off)
            height: isOn ? 40 : 60, // Slightly larger when off (taller when off)
          },
        ]}
        onPress={toggleSwitch}
      >
        <Text style={styles.text}>{isOn ? 'On' : 'C'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // Rounded corners
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ToggleButton;
