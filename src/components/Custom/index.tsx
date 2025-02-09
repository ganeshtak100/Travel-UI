import React from 'react';
import { View, StyleSheet } from 'react-native';

const CrossLines = () => {
  const numberOfLines = 20; // Adjust the number of lines

  const lines = [];
  
  // Creating horizontal lines
  for (let i = 0; i < numberOfLines; i++) {
    lines.push(
      <View
        key={`horizontal-${i}`}
        style={[
          styles.line,
          { top: `${(i / (numberOfLines - 1)) * 100}%`, width: '100%' },
        ]}
      />
    );
  }

  // Creating vertical lines
  for (let i = 0; i < numberOfLines; i++) {
    lines.push(
      <View
        key={`vertical-${i}`}
        style={[
          styles.line,
          { left: `${(i / (numberOfLines - 1)) * 100}%`, height: '100%' },
        ]}
      />
    );
  }

  return (
    <View style={styles.container}>
      {lines}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    position: 'relative',
  },
  line: {
    position: 'absolute',
    backgroundColor: 'white',
  },
});

export default CrossLines;
