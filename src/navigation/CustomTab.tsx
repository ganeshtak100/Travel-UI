/* eslint-disable react-native/no-inline-styles */
import {Icons} from '@assets/svg';
import {Fonts} from '@constants/fonts';
import {ROUTES} from '@constants/routes';
import {normalize, responsiveWidth, width} from '@utils/responsiveSize';
import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const iconSize = normalize(28);
const activeColor = '#007AFF';
const inActiveColor = '#8E8E93';
const tabHeight = normalize(85);
const tabWidth = responsiveWidth(width / 5);

const TabIcons = [
  {
    name: 'Home',
    icon: (active: boolean) => (
      <Icons.Home
        color={active ? activeColor : inActiveColor}
        height={iconSize}
      />
    ),
  },
  {
    name: 'Explore',
    icon: (active: boolean) => (
      <Icons.Explore
        color={active ? activeColor : inActiveColor}
        width={iconSize}
      />
    ),
  },
  {
    name: ROUTES.LIVE_EVENTS,
    icon: (active: boolean) => (
      <Icons.Event
        color={active ? activeColor : inActiveColor}
        height={iconSize}
      />
    ),
  },
  {
    name: 'Saved',
    icon: (active: boolean) => (
      <Icons.Saved
        color={active ? activeColor : inActiveColor}
        height={iconSize}
        width={iconSize}
      />
    ),
  },
  {
    name: 'Profile',
    icon: (active: boolean) => (
      <Icons.Profile
        color={active ? activeColor : inActiveColor}
        width={iconSize}
      />
    ),
  },
];

interface CustomBottomTabProps {
  navigation: any;
  state: {
    index: number;
    routes: {name: string}[];
  };
}

export const CustomBottomTab: React.FC<CustomBottomTabProps> = ({
  navigation,
  state,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const lineTranslateX = useRef(new Animated.Value(0)).current;

  const handleTabPress = (index: number, route: string) => {
    setSelectedIndex(index);
    navigation.navigate(route);

    Animated.spring(lineTranslateX, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        height: tabHeight,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
      }}>
      {TabIcons.map((tab, index) => (
        <TouchableOpacity
          key={tab.name}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
          onPress={() => handleTabPress(index, tab.name)}>
          {tab.icon(state.index === index)}
          <Text
            style={{
              color: state.index === index ? activeColor : inActiveColor,
              fontSize: normalize(14),
              fontWeight: '500',
              textAlign: 'center',
              fontFamily:
                state.index === index
                  ? Fonts.PoppinsMedium
                  : Fonts.PoppinsRegular,
            }}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.line,
          {
            transform: [{translateX: lineTranslateX}],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    position: 'absolute',
    top: 0,
    width: tabWidth,
    height: 3,
    backgroundColor: activeColor, // Change to your desired line color
    borderRadius: 2,
  },
});
