import {StackNavigationProp} from '@react-navigation/stack'
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native'
export type Routes = {[key: string]: keyof ROUTES_PARAMS}
export enum ROUTES {
  HOME = 'Home',
  EXPLORE="Explore",
  LIVE_EVENTS="LiveEvent",
  SAVED="Saved",
  PROFILE="Profile"


}

export type ROUTES_PARAMS = {
  Home: undefined,
  Explore:undefined,
  LiveEvent:undefined,
  Saved:undefined,
  Profile:undefined
}

export type CommonStackNavProps<T extends keyof ROUTES_PARAMS> = {
  navigation: StackNavigationProp<ROUTES_PARAMS, T>
  route: RouteProp<ROUTES_PARAMS, T>
}