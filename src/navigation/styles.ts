import { IS_IOS } from "@constants/AppConstant";
import { COLORS } from "@constants/colors";
import { Fonts } from "@constants/fonts";
import { normalize, respFontSize } from "@utils/responsiveSize";
import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
interface ImgProps {
  focused: boolean;
  width: number;
  height: number;
}
export const styling = (focused: boolean, width: number, height: number) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    icon: {
      width: width ? width : 25,
      height: height ? height : 25,
      resizeMode: "contain",
      tintColor: focused ? COLORS.primary : "#959595",
    },
    valueContainer: {
      height: normalize(20),
      width: normalize(20),
      borderRadius: normalize(65),
      backgroundColor: COLORS.darkBlue,
      marginRight: normalize(8),
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      right: 0,
    },
    valueTxt: {
      fontSize: respFontSize(10),
      fontFamily: Fonts.PoppinsMedium,
      color: COLORS.primary,
      textAlign: "center",
    },
    absoluteView: {
      width: 25,
      height: 25,
      position: "absolute",
      backgroundColor: focused ? "transparent" : "rgba(120, 120, 120, 0.50)",
      borderRadius: 20,
    },
    tabBarLabelStyle: {
      fontSize: 13,
      fontFamily: Fonts.PoppinsRegular,
      marginTop: 8,
    },
    tabBarStyle: {
      paddingTop: 15,
      height: IS_IOS ? 85 : 75,
      paddingBottom: IS_IOS ? 22 : 12,
    },
  });