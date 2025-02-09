import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  normalize,
  respFontSize,
  responsiveHeight,
  responsiveWidth,
  screenWidth,
} from '@utils/responsiveSize';
import {COLORS} from '@constants/colors';
import FastImage from 'react-native-fast-image';
import {Fonts} from '@constants/fonts';
import CustomArrowIcon from '@components/Custom/CustomArrow';

const ExploreFrame = ({data}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        padding: normalize(14),
        borderRadius: normalize(25),
        backgroundColor: COLORS.white,
        gap: 4,
        width: screenWidth / 2.2,
        paddingRight: 18,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <FastImage
          source={data.image}
          resizeMode="cover"
          style={{
            height: responsiveHeight(28),
            width: responsiveWidth(28),
            borderRadius: 100,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 5,
            alignSelf: 'flex-start',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: respFontSize(10),
              color: data?.up ? COLORS.mossGreen : COLORS.red,
              fontFamily: Fonts.PoppinsRegular,
            }}>
            +13.34%
          </Text>
          <CustomArrowIcon
            color={data?.up ? COLORS.mossGreen : COLORS.red}
            direction={data?.up ? 'up' : 'down'}
          />
        </View>
      </View>
      <Text
        style={{
          fontFamily: Fonts.PoppinsMedium,
          fontSize: respFontSize(14),
          color: '#B5B5B5',
          textAlign: 'left',
          includeFontPadding: false,
        }}>
        {data.country}
      </Text>
      <Text
        numberOfLines={1}
        style={{
          fontFamily: Fonts.PoppinsSemibold,
          fontSize: respFontSize(16),
          color: COLORS.black,
          textAlign: 'left',
          includeFontPadding: false,
          maxWidth: screenWidth / 2.9,
          top: -4,
        }}>
        {data.palace}
      </Text>
    </TouchableOpacity>
  );
};

export default ExploreFrame;

const styles = StyleSheet.create({});
