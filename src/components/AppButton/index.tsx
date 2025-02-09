import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/colors';
import {Fonts} from '@constants/fonts';
import {respFontSize} from '@utils/responsiveSize';

type AppButtonProps = {
  onBtnPress?: () => void;
  title?: string;
  btnStyle?: ViewStyle; // optional prop to add additional styles to the button
  btnTextStyle?: TextStyle;
};
const AppButton = ({
  onBtnPress,
  title = 'btn1',
  btnStyle = {},
  ...props
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onBtnPress}
      style={{
        borderRadius: 24,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        ...btnStyle,
      }}>
      <Text
        style={{
          color: COLORS.white,
          fontFamily: Fonts.PoppinsSemibold,
          fontSize: respFontSize(10),
          paddingVertical: 10,
          paddingHorizontal: 18,
          includeFontPadding: false,
          textAlign: 'center',
          ...props.btnTextStyle,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
