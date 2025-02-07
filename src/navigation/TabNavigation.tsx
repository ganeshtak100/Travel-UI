import {Icons} from '@assets/svg';
import {COLORS} from '@constants/colors';
import {ROUTES, ROUTES_PARAMS} from '@constants/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '@screens/Explore';
import Home from '@screens/Home';
import LiveEvent from '@screens/LiveEvent';
import Profile from '@screens/Profile';
import Saved from '@screens/Saved';
import React, {memo} from 'react';
import {Text, View} from 'react-native';
// import {CustomTab} from './CustomTab';
import {CustomBottomTab} from './CustomTab';
import {styling} from './styles';

const Tab = createBottomTabNavigator<AppParamList>();
// const Stack = createStackNavigator<ROUTES_PARAMS>();
interface ITabBarIconParams {
  focused?: boolean;
  color?: string;
  size?: number;
}
const styles = styling(true, 20, 20);

const PrivateStack = () => {
  return <></>;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerShown: false,
        lazy: false,
        // tabBarActiveTintColor: COLORS.primary,
        // tabBarInactiveTintColor: COLORS.darkGray,
        // tabBarStyle: styles.tabBarStyle,
        // tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        // options={{
        //   tabBarLabel: 'Home',
        //   headerShown: false,
        //   lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return (
        //       <Icons.Home color={focused ? COLORS.primary : COLORS.darkGray} />
        //     );
        //   },
        // }}
      />
      <Tab.Screen
        name={ROUTES.EXPLORE}
        component={Explore}
        // options={{
        //   tabBarLabel: 'Explore',
        //   headerShown: false,
        //   lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return (
        //       <Icons.Explore
        //         color={focused ? COLORS.primary : COLORS.darkGray}
        //       />
        //     );
        //   },
        // }}
      />
      <Tab.Screen
        name={ROUTES.LIVE_EVENTS}
        component={LiveEvent}
        options={{
          tabBarLabel: 'Live Events',
          headerShown: false,
          lazy: false,
          tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
            return (
              <Icons.Event color={focused ? COLORS.primary : COLORS.darkGray} />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.SAVED}
        component={Saved}
        // options={{
        //   tabBarLabel: 'Saved',
        //   headerShown: false,
        //   lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return (
        //       <Icons.Saved color={focused ? COLORS.primary : COLORS.darkGray} />
        //     );
        //   },
        // }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        // options={{
        //   tabBarLabel: 'Profile',
        //   headerShown: false,
        //   lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return (
        //       <Icons.Profile
        //         color={focused ? COLORS.primary : COLORS.darkGray}
        //       />
        //     );
        //   },
        // }}
      />
    </Tab.Navigator>
  );
};

export {TabNavigation};
