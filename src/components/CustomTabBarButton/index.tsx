import React, {memo, useCallback, useEffect, useRef} from 'react';
import {FlatList, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import RenderTabBar from './RenderTabBar'; // Import the separated component
import { COLORS } from '@constants/colors';
import { responsiveWidth } from '@utils/responsiveSize';

type ITabProps = {
  tabData: Array<any>; // It's better to define a specific type instead of `any`
  currentIndex: number;
  onTabPress: (index: number) => void;
  textStyle?: TextStyle;
  tabStyle?: ViewStyle;
};

const TabButton = ({tabData, currentIndex, onTabPress, tabStyle, textStyle}: ITabProps) => {
  const scrollRef = useRef<FlatList>(null);
  const styles = style();
  // useEffect(() => {
    // Adjust scroll position based on current index
    // scrollRef.current?.scrollToIndex({index:currentIndex-1, animated: true});
  // }, [currentIndex, tabData.length]);
  const ItemSeparate = useCallback(() => {
    return <View testID='separator' style={{height: 0, width: responsiveWidth(10), backgroundColor: '#ccc'}} />;
  }, []);
  return (
      <FlatList
        ref={scrollRef}
        data={tabData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow:1,justifyContent:"space-between"}}
        ItemSeparatorComponent={ItemSeparate}
        keyboardShouldPersistTaps='handled'
        scrollEnabled={false}
        renderItem={({item, index}) => (
          <RenderTabBar
            item={item}
            index={index}
            currentIndex={currentIndex}
            onTabPress={onTabPress}
            tabStyle={tabStyle}
            tabData={tabData}
          />
        )}
        onScrollToIndexFailed={({index}) => {
          setTimeout(() => {
            scrollRef.current?.scrollToIndex({index, animated: true});
          }, 500);
        }}
      />
  );
};

// Styles
const style = () =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
  });

export default memo(TabButton);
