import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {StackNavigationProp} from '@react-navigation/stack';
export type Routes = {[key: string]: keyof ROUTES_PARAMS};
export enum ROUTES {
  HOME = 'Home',
  EXPLORE = 'Explore',
  LIVE_EVENTS = 'LiveEvent',
  SAVED = 'Saved',
  PROFILE = 'Profile',
  TAB_NAVIGATION = 'TabNavigation',
}

export type ROUTES_PARAMS = {
  Home: undefined;
  Explore: undefined;
  LiveEvent: undefined;
  Saved: undefined;
  Profile: undefined;
  TabNavigation: undefined;
};

export type CommonStackNavProps<T extends keyof ROUTES_PARAMS> = {
  navigation: NativeStackNavigationProp<ROUTES_PARAMS, T>;
  route: RouteProp<ROUTES_PARAMS, T>;
};
