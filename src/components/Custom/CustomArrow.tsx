import React from 'react';
import { View } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const CustomArrowIcon = ({ direction = 'up', size = 7 ,color="#000"}) => {
  // Define the arrow shape as a polygon (triangle)
  const points = direction === 'up'
    ? `${size / 2},0 ${size},${size} 0,${size}`  // Points for upwards arrow
    : `${size / 2},${size} ${size},0 0,0`;        // Points for downwards arrow

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
        <Polygon points={points} fill={color} />
      </Svg>
    </View>
  );
};

export default CustomArrowIcon;
