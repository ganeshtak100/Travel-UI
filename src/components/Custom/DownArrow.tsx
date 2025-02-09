import React from 'react';
import { View, StyleSheet } from 'react-native';

const DownArrow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.arrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'black', // Change to your desired color
    marginTop: 10,
  },
});

export default DownArrow;
