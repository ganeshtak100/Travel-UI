import HomeSliderFrame from '@components/Frame/HomeSliderFrame';
import { COLORS } from '@constants/colors';
import { width } from '@utils/responsiveSize';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Animated, StyleSheet, Dimensions } from 'react-native';

interface ImageSliderProps {
  images: string[]; // Array of image URLs
  interval?: number; // Time interval for auto slide
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = new Animated.Value(0);
  const windowWidth = Dimensions.get('window').width;
  const flatListRef = React.useRef<FlatList>(null);

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Slide one by one
    }, interval);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [currentIndex, images.length,interval]);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true }
  );

  const renderItem = ({ item ,index}: { item: string,index:number }) => {
    const nextItem = images[index + 1] || null;
    // const nextItem = images.length - 1 === currentIndex ? null : images[index + 1] || null;

    return(
    <View style={styles.imageContainer}>
     <HomeSliderFrame data={item}/>
     {nextItem && <HomeSliderFrame data={nextItem} />}
    </View>
  )}
  const onScrollEndDrag = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / windowWidth);
    setCurrentIndex(index); // Update the index when the swipe ends
  };
  const renderIndicator = () => {
       return(  
          <View style={styles.pagination}>
            {images?.map((_, index) => {
              const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
              const dotScale = scrollX.interpolate({
                inputRange,
                outputRange: [1, 1, 1], // Dot size will increase to 1.5x for the active slide
                extrapolate: 'clamp',
              });
  
              const dotOpacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3], // Active dot will be fully opaque, others slightly faded
                extrapolate: 'clamp',
              });
                  const dotTranslateX = scrollX.interpolate({
                        inputRange: [0, 1, 2],  // Corresponds to 3 dots max
                        outputRange: [0, 16, 32],  // Adjust the position of the active dot
                        extrapolate: 'clamp',
                      });
              const isActive =currentIndex === index;
  
              return (
                <Animated.View
                  key={index + 'id'}
                  style={[
                    styles.dot,
                    currentIndex === index ? styles.activeDot : styles.inactiveDot,
                    {
                      transform: [{ scale: dotScale }],
                      // transform: [{ scale: dotTranslateX }],
                      // opacity: dotOpacity,
                      backgroundColor: isActive ? COLORS.lightGray : COLORS.light_Blue,
                      width: isActive ? 18 : 6, // Make the active dot longer
                      alignSelf:"center",
                      height: 6,
                    },
                  ]}
                />
              );
            })}
          </View>
       )
          // Interpolate to smoothly transition the indicator
    // const dotTranslateX = scrollX.interpolate({
    //   inputRange: [0, 1, 2],  // Corresponds to 3 dots max
    //   outputRange: [0, 16, 32],  // Adjust the position of the active dot
    //   extrapolate: 'clamp',
    // });
        
    //   const dots = [];
    //   const totalImages = images.length;
    //   const totalDots = Math.ceil(totalImages / 2);
    //   // for (let i = 0; i < Math.min(3, images.length/2); i++) {
    //     for (let i = 0; i < totalDots; i++) {
    //     // const isActive = i === currentIndex;
    //     const isActive = i === Math.floor(currentIndex / 2); // Active dot corresponds to pairs of images

    //     dots.push(
    //       <View
    //         key={i}
    //         style={[
    //           // styles.dot,
    //           {  height: 8,
    //             borderRadius: 20,
    //             margin: 5,
    //             backgroundColor: isActive ? COLORS.lightGray : COLORS.light_Blue,
    //             width: isActive ? 26 : 8, // Make the active dot longer
    //           }
    //         ]}
    //       />
    //     );
    //   }
    //   return (
    //     <View style={styles.indicatorContainer}>
    //       <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: dotTranslateX }],
    //      transitionTimingFunction: 'ease-out', }}>
    //         {dots}
    //       </Animated.View>
    //     </View>
    //   );
  }
  // Scroll to next image when index changes
  useEffect(() => {
    if (currentIndex % 2 === 0) {
      // Scroll to the index (showing 2 images at once)
      flatListRef.current?.scrollToIndex({ index: Math.floor(currentIndex / 2), animated: true });
    }
  }, [currentIndex]);
  return (
    <View style={{flex:1}}>
      <AnimatedFlatList
        data={images}
        horizontal
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // onScroll={onScroll}
        pagingEnabled
        initialScrollIndex={currentIndex}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        // snapToInterval={styles.image.width * 2 + 10}
        onScrollToIndexFailed={() => {}}
        contentContainerStyle={{gap:16}}
        snapToInterval={windowWidth/2}
        // contentContainerStyle={{ flexGrow:1 }}
        style={styles.slider}
        scrollEnabled={false}
        // onScroll={onScroll}
        // onEndReachedThreshold={0.1}
        // onScrollEndDrag={onScrollEndDrag}
      />
      {renderIndicator()}
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
  },
  imageContainer: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',gap:10
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 5,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  // dot: {
  //   height: 8,
  //   width: 8,
  //   borderRadius: 4,
  //   margin: 5,
  // },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 7,
    alignSelf: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: COLORS.lightGray,
    width: 20,
    marginHorizontal: 4,
    height: 6,
  },
  inactiveDot: {
    height: 8,
    width: 10,
    backgroundColor:COLORS.light_Blue,
    marginHorizontal: 2,
  },
});

export default ImageSlider;
