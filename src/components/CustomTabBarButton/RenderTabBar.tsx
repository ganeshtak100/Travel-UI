import { COLORS } from '@constants/colors';
import { Fonts } from '@constants/fonts';
import { normalize, respFontSize, screenWidth } from '@utils/responsiveSize';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

type RenderTabBarProps = {
  item: any; // It's better to define a specific type instead of `any`
  currentIndex: number;
  onTabPress: (index: number) => void;
  tabStyle?: ViewStyle;
  // textStyle?: TextStyle;
  tabData?: any;
  index?: number;
};

const RenderTabBar = ({item, currentIndex, onTabPress, tabStyle, tabData, index}: RenderTabBarProps) => {
  const styles = style();
 
  return (
    <TouchableOpacity
      onPress={() => onTabPress(item?.id)}
      style={[
        styles.tabButton,
        {
          justifyContent: tabData.length === 1 ? 'flex-start' : 'center',
          paddingVertical: normalize(8),
          backgroundColor: currentIndex === item.id ? COLORS.primary : COLORS.white,
          borderWidth:1,
          borderColor:COLORS.primary,
          borderRadius:normalize(10),
          paddingHorizontal:normalize(15),
          alignItems: 'center',
          ...tabStyle,
        },
      ]}>
      {item.tabIcon && currentIndex === item.id ? item.tabIcon : item.lightIcons}
      <Text
        style={[
          {
            color:currentIndex===item.id ? COLORS.white : COLORS.black,
            opacity: currentIndex === item.id ? 1 : 0.6,
            textAlign: 'center',
            fontFamily: Fonts.PoppinsMedium,
            fontSize:respFontSize(12),
          },
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

// Styles
const style = () =>
  StyleSheet.create({
    tabButton: {
      flexDirection: 'row',
      gap: 3,
      alignItems: 'center',
    },
  });

export default React.memo(RenderTabBar);
