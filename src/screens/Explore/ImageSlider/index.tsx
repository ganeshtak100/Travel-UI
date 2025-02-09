import {COLORS} from '@constants/colors';
import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('window'); // Get the screen width and height

const ImageSlider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the active slide
  const [underlinePosition] = useState(new Animated.Value(0)); // Animated value for the indicator
  const scrollX = new Animated.Value(0);

  // Function to update the active index and move the indicator
  const onViewableItemsChanged = ({viewableItems}) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index;
      setCurrentIndex(newIndex);

      Animated.spring(underlinePosition, {
        toValue: newIndex * (width / images.length),
        useNativeDriver: false,
      }).start();
    }
  };

  // Render function for each image item
  const renderItem = ({item}) => {
    console.log('item', item,images);
    return (
      <View style={styles.imageWrapper}>
        <FastImage source={{uri:item.image}} style={styles.image} resizeMode='cover' />
      </View>
    );
  };

  // Render the bottom indicator
  const renderIndicator = () => {
    return (
      <View style={styles.indicatorWrapper}>
        {images.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotScale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1, 1], // Dot size will increase to 1.5x for the active slide
            extrapolate: 'clamp',
          });
          const isActive = currentIndex === index;
          return (
            <Animated.View
              key={index + 'id'}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
                {
                  transform: [{scale: dotScale}],
                  backgroundColor: isActive
                    ? COLORS.white
                    : COLORS.light_Blue,
                  width: isActive ? 28 : 6, // Make the active dot longer
                  alignSelf: 'center',
                  height: 6,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        // onViewableItemsChanged={onViewableItemsChanged}
        // viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        contentContainerStyle={{flexGrow: 1}}
      />

      {renderIndicator()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // flex:1
  },
  carousel: {
    marginBottom: 10,
  },
  imageWrapper: {
    width: '100%',
    height: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  indicatorWrapper: {
    position: 'absolute',
    bottom: 40, // Slightly above the bottom of the image
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right:30
  },
  //   dot: {
  //     width: 8,
  //     height: 8,
  //     borderRadius: 4,
  //     backgroundColor: 'gray',
  //     margin: 5,
  //   },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  //   activeDot: {
  //     backgroundColor: 'black', // Active dot color
  //   },
  activeDot: {
    backgroundColor: COLORS.lightGray,
    width: 20,
    marginHorizontal: 4,
    height: 6,
  },
  inactiveDot: {
    height: 8,
    width: 10,
    backgroundColor: COLORS.light_Blue,
    marginHorizontal: 2,
  },
});

export default ImageSlider;
