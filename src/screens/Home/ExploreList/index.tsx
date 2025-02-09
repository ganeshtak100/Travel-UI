import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Fonts} from '@constants/fonts';
import {normalize, respFontSize, screenWidth} from '@utils/responsiveSize';
import {COLORS} from '@constants/colors';
import ExploreFrame from '@components/Frame/ExploreFrame';

const ExploreList = (props: any) => {
      const scrollX = new Animated.Value(0);
        const [currentIndex, setCurrentIndex] = useState<number>(0);
  const RenderList = useCallback(
    ({item}) => {
      return <ExploreFrame data={item} />;
    },
    [props.data],
  );
  const renderIndicator = () => {
    return (
      <View style={styles.pagination}>
        {props?.data?.map((_, index) => {
          const inputRange = [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth,
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
                    ? "#3B3B3B"
                    : COLORS.light_Blue,
                  width: isActive ? 18 : 6, // Make the active dot longer
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
  const onViewableItemsChanged = ({ viewableItems }) => {
    // Update the current index when a new slide is in view
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };
  return (
    <View
      style={{
        paddingHorizontal: normalize(16),
        paddingVertical: normalize(16),
        gap: normalize(12),
        backgroundColor: COLORS.grayLight,
        // marginTop: normalize(22),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontFamily: Fonts.PoppinsSemibold,
            fontSize: respFontSize(20),
            color: COLORS.black,
          }}>
          Explore Localities
        </Text>

        <TouchableOpacity activeOpacity={0.5}>
          <Text
            style={{
              fontFamily: Fonts.PoppinsMedium,
              fontSize: respFontSize(14),
              color: COLORS.primary,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={RenderList}
        contentContainerStyle={{gap: normalize(12)}}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged} // Callback to track slide changes
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 40 }} 
      />
      {renderIndicator()}
    </View>
  );
};

export default ExploreList;

const styles = StyleSheet.create({
  slider: {
    width: '100%',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
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
  pagination: {
    flexDirection: 'row',
    bottom: 0,
    alignSelf: 'center',paddingTop:5
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
    backgroundColor: COLORS.light_Blue,
    marginHorizontal: 2,
  },
});
