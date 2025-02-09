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
import {CustomBottomTab} from './CustomTab';
import {styling} from './styles';

const Tab = createBottomTabNavigator<AppParamList>();
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
    
      />
      <Tab.Screen
        name={ROUTES.EXPLORE}
        component={Explore}
    
      />
      <Tab.Screen
        name={ROUTES.LIVE_EVENTS}
        component={LiveEvent}
   
      />
      <Tab.Screen
        name={ROUTES.SAVED}
        component={Saved}
   
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
  
      />
    </Tab.Navigator>
  );
};

export {TabNavigation};
