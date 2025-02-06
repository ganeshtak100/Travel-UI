import React, {memo} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text, View} from 'react-native'
// import {Icons} from 'assets/SvgIcon'
// import {COLORS} from 'utils/colors'
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import { ROUTES ,ROUTES_PARAMS} from '@constants/routes'
import { COLORS } from '@constants/colors'
import { styling } from './styles'
import Home from '@screens/Home'
import Explore from '@screens/Explore'
import LiveEvent from '@screens/LiveEvent'
import Saved from '@screens/Saved'
import Profile from '@screens/Profile'

const Tab = createBottomTabNavigator<AppParamList>()
const Stack = createStackNavigator<ROUTES_PARAMS>()
interface ITabBarIconParams {
  focused: boolean
  color: string
  size: number
}
const styles = styling(true, 20, 20)

const PrivateStack = () => {
  return (
    <>
    </>
  )
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerShown: false,
        lazy: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.lightGray,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return <Icons.HomeIcon color={focused ? COLORS.primary : COLORS.darkGray} />
        //   },
        }}
      />
      <Tab.Screen
        name={ROUTES.EXPLORE}
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          headerShown: false,
          lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return (
        //       <>
        //         <Icons.ChargePlug color={focused ? COLORS.primary : COLORS.darkGray} />
        //         {chargeVal !== null && (
        //           <View style={styles.valueContainer}>
        //             <Text style={styles.valueTxt}>{chargeVal}</Text>
        //           </View>
        //         )}
        //       </>
        //     )
        //   },
        }}
      />
      <Tab.Screen
        name={ROUTES.LIVE_EVENTS}
        component={LiveEvent}
        options={{
          tabBarLabel: 'Live Events',
          headerShown: false,
          lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return <Icons.Scan color={focused ? COLORS.primary : COLORS.darkGray} widthSize={25} heightSize={25} />
        //   },
        }}
      />
      <Tab.Screen
        name={ROUTES.SAVED}
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          headerShown: false,
          lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return (
        //       <Icons.ChargePoint color={focused ? COLORS.primary : COLORS.darkGray} widthSize={24} heightSize={24} />
        //     )
        //   },
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          lazy: false,
        //   tabBarIcon: ({focused, color, size}: ITabBarIconParams) => {
        //     return (
        //       <Icons.WalletIcon color={focused ? COLORS.primary : COLORS.darkGray} widthSize={20} heightSize={20} />
        //     )
        //   },
        }}
      />
    </Tab.Navigator>
  )
}

export {TabNavigation}