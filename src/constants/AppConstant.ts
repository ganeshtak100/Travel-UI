import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

const IS_IOS = Platform.OS === "ios";
const isNotch = DeviceInfo.hasNotch();

export { IS_IOS, isNotch };