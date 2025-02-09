/* eslint-disable react-native/no-inline-styles */
import {
  abuDhabi,
  ajman,
  bunkimPalace,
  dharmshala,
  dubai,
  effilTower,
  exploreWorld,
  Fujairah,
  hawamahal,
  kullan,
  likeShare,
  meetRemovebg,
  Quwain,
  Ras_Al,
  ridge,
  sharjan,
  tajmajhal,
  uae,
  whiteHouse,
} from '@assets/image';
import {Icons} from '@assets/svg';
import AppButton from '@components/AppButton';
import CustomTabBarButton from '@components/CustomTabBarButton';
import HomeHeader from '@components/Header/HomeHeader';
import ImageSlider from '@components/ImageSlider';
import SearchBar from '@components/SearchBar';
// import ToggleButton from '@components/ToggleButton';
import Switch from '@components/ToggleButton/Switch';
import {COLORS} from '@constants/colors';
import {Fonts} from '@constants/fonts';
import {height, normalize, respFontSize} from '@utils/responsiveSize';
import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ExploreList from './ExploreList';
import CityList from './CityList';
import FastImage from 'react-native-fast-image';

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);
  const tabData = [
    {
      id: 1,
      name: 'Mountains',
      tabIcon: <Icons.Mountain color={COLORS.white} />,
      lightIcons: <Icons.Mountain color={COLORS.black} />,
    },
    {
      id: 2,
      name: 'Desert',
      tabIcon: <Icons.Desert color={COLORS.white} />,
      lightIcons: <Icons.Desert color={COLORS.black} />,
    },
    {
      id: 3,
      name: 'Beach',
      tabIcon: <Icons.Sunrise color={COLORS.white} />,
      lightIcons: <Icons.Sunrise color={COLORS.black} />,
    },
  ];
  const RenderItem = ({item, index}: any) => {
    if (item.type === 'category') {
      return (
        <View
          style={{
            paddingHorizontal: normalize(16),
            paddingVertical: normalize(20),
            gap: normalize(12),
            backgroundColor: COLORS.shadeGray,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: Fonts.PoppinsSemibold,
              fontSize: respFontSize(20),
              color: COLORS.black,
            }}>
            Categories
          </Text>
          <View style={{flex: 1, flexDirection: 'row', gap: normalize(12)}}>
            <View style={{flex: 2.5}}>
              <CustomTabBarButton
                tabData={tabData}
                currentIndex={currentIndex}
                onTabPress={item => {
                  setCurrentIndex(item);
                }}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                flex: 0.21,
                backgroundColor: COLORS.mossGreen,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
              }}>
              <Icons.Menubar />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    if (item.type === 'locality') {
      return <ExploreList data={item.data} />;
    }
    if (item.type === 'city') {
      return <CityList data={item.data} />;
    }
    if (item.type === 'item') {
      return (
        <View
          style={{
            height: height / 4,
            paddingHorizontal: normalize(16),
            width: '100%',
            backgroundColor: COLORS.shadeGray,
          }}>
          <FastImage
            source={item.image}
            style={{
              height: '100%',
              width: '100%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,

              elevation: 13,
              // backgroundColor:"red"
            }}
            resizeMode="contain"
          />
        </View>
      );
    }
    if (item.type === 'banner') {
      return (
        <View
        style={{
          height: height / 3.5,
          width: '100%',
          backgroundColor: COLORS.shadeGray,
        }}>
        <FastImage
          source={item.image}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="contain"
        />
        </View>
      );
    }
    return <View></View>;
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const images = [
    {
      id: 1,
      uri: ridge,
      title: 'The Ridge',
      city: 'Shimla',
      state: 'Himachal Pradesh',
    },
    {
      id: 2,
      uri: dharmshala,
      title: 'HPCA',
      city: 'Dharamshala',
      state: 'Himachal Pradesh',
    },
    {
      id: 3,
      uri: kullan,
      title: 'The Palm',
      city: 'Kullen',
      state: 'Himachal Pradesh',
    },
  ];
  const data = [
    {
      id: 1,
      type: 'category',
    },
    {
      id: 2,
      type: 'locality',
      data: [
        {
          image: uae,
          changes: '+13.34%',
          up: true,
          country: 'UAE',
          palace: 'Palm Jumeirah',
        },
        {
          image: tajmajhal,
          changes: '+13.34%',
          up: false,
          country: 'India',
          palace: 'Taj Mahal',
        },
        {
          image: whiteHouse,
          changes: '+13.34%',
          up: true,
          country: 'USA',
          palace: 'White House',
        },
        {
          image: bunkimPalace,
          changes: '+13.34%',
          up: false,
          country: 'UK',
          palace: 'Buckingham Palace',
        },
        {
          image: effilTower,
          changes: '+13.34%',
          up: false,
          country: 'France',
          palace: 'Eiffel Tower',
        },
        {
          image: hawamahal,
          changes: '+13.34%',
          up: true,
          country: 'India',
          palace: 'Hawa Mahal',
        },
      ],
    },
    {
      id: 3,
      type: 'city',
      data: [
        {
          id: 1,
          image: abuDhabi,
          cityName: 'Abu Dhabi',
        },
        {
          id: 2,
          image: dubai,
          cityName: 'Dubai',
        },
        {
          id: 3,
          image: sharjan,
          cityName: 'Sharjah',
        },
        {
          id: 4,
          image: ajman,
          cityName: 'Ajman',
        },
        {
          id: 5,
          image: Fujairah,
          cityName: 'Fujairah',
        },
        {
          id: 6,
          image: Ras_Al,
          cityName: 'Ras Al Khaimah',
        },
        {
          id: 7,
          image: Quwain,
          cityName: 'Umm Al Quwain',
        },
      ],
    },
    {
      id: 4,
      type: 'item',
      image: meetRemovebg,
    },
    {
      id: 5,
      type: 'banner',
      image: likeShare,
    },
    {
      id: 6,
      type: 'banner',
      image: exploreWorld,
    },
  ];
  const RenderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          gap: normalize(16),
          height: height / 2.8,
          paddingHorizontal: normalize(16),
        }}>
        <HomeHeader />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <SearchBar />
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <Switch
              barHeight={24}
              switchWidth={30}
              switchHeight={36}
              value={isEnabled}
              onValueChange={toggleSwitch}
              disabled={false}
              backgroundActive={COLORS.lightGray}
              backgroundInactive={COLORS.mutedBlue}
              circleActiveColor={'white'}
              circleInActiveColor={'white'}
              changeValueImmediately={true}
              innerCircleStyle={{
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }} // style for inner animated circle for what you (may) be rendering inside the circle
              outerCircleStyle={{}} // style for outer animated circle
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={1.2} // multiplied by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={36} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: height / 6,
            backgroundColor: COLORS.lightBlue,
            borderRadius: 16,
          }}>
          <View style={{flex: 1.3, paddingHorizontal: 14, gap: 8}}>
            <Text
              style={{
                color: COLORS.white,
                fontFamily: Fonts.PoppinsBold,
                fontSize: respFontSize(20),
                lineHeight: 28,
                textAlign: 'left',
              }}>
              TRAVEL SIMPLIFIED
            </Text>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <AppButton title="View Deals" onBtnPress={() => {}} />
            </View>
          </View>
          <View style={{flex: 2.2, paddingHorizontal: 8, paddingTop: 12}}>
            <ImageSlider images={images} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.shadeGray}}>
      <FlatList
        data={data}
        ListHeaderComponent={RenderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: COLORS.shadeGray,
          paddingBottom: 20,
        }}
        renderItem={RenderItem}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
