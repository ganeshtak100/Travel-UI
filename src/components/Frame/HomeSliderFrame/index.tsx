import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {height, respFontSize, width} from '@utils/responsiveSize';
import LinearGradient from 'react-native-linear-gradient';
import {Icons} from '@assets/svg';
import {COLORS} from '@constants/colors';
import {Fonts} from '@constants/fonts';

type SlideProps = {
  image: string;
  data: any;
  onPress: () => void;
  imageStyle?: any;
  titleStyle?: any;
  descriptionStyle?: any;
};
export default function HomeSliderFrame(props: SlideProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{borderRadius: 16, height: height / 7.8, width: width / 4.2}}>
      <FastImage
        source={props.data.uri}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 16,
          ...props.imageStyle,
        }}
        resizeMode="cover"
      />
      <View style={{position: 'absolute', bottom: 0, flex: 1, width: '100%'}}>
        <LinearGradient
          colors={['#00000000', '#000', '#000000']}
          style={styles.gradientOverlay}>
          <View style={{bottom: 4}}>
            <Text
              style={{
                fontSize: respFontSize(10),
                color: COLORS.white,
                fontFamily: Fonts.PoppinsMedium,
                includeFontPadding: false,
                left: 6,
              }}>
              {props.data.title}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-start',
                  top: -2.8,
                }}>
                <Icons.LocationMarker
                  color={COLORS.white}
                  height={18}
                  width={18}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: respFontSize(8),
                    color: COLORS.white,
                    fontFamily: Fonts.PoppinsRegular,
                    opacity: 0.8,
                    includeFontPadding: false,
                  }}>
                  {props.data.city+","}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: respFontSize(8),
                    color: COLORS.white,
                    fontFamily: Fonts.PoppinsRegular,
                    opacity: 0.8,
                    includeFontPadding: false,
                    maxWidth: width / 6,
                  }}>
                  {props.data.state}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    // padding: 5,
    // left:6,
    gap: 2,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignSelf: 'center',
    width: '100%',
  },
});
